package com.cos.book.web;



//단위 테스트 => 컨트롤러만 테스트 (Controller 관련 로직만 띄운다)
// ex) Filter, ControllerAdvice

import com.cos.book.domain.Book;
import com.cos.book.service.BookService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@WebMvcTest   //Controller , Filter , ControllerAdvice Controller 관련된 것들만 Ioc에 뜬다
//@ExtendWith(SpringExtension.class)  //스프링으로 확장 테스트 하기 위해서 꼭 필요함 junit4 에서는 webmvcTest에 없어서 붙여야함
@Slf4j

public class BookControllerUnitTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean //bookService IoC환경에 bean으로 등록됨
    private BookService bookService;

    //BDDMockito 패턴
    @Test //테스트 할려면 test어노테이션 등록
    public void save_테스트() throws Exception {
      //given (테스트를 하기 위한 준비
       Book book = new Book(null,"스프링 따라하기", "코스");
       String content = new ObjectMapper().writeValueAsString(book);
       when(bookService.저장하기(book)).thenReturn(new Book(1L,"스프링 따라하기","코스"));

      //when 테스트 실행
      ResultActions resultAction = mockMvc.perform(post("/book")
              .contentType(MediaType.APPLICATION_JSON_UTF8)
              .content(content)
              .accept(MediaType.APPLICATION_JSON_UTF8));

       // then (검증)
        resultAction
                .andExpect(MockMvcResultMatchers.status().isCreated()) //응답 201을 기대한다
                .andExpect(MockMvcResultMatchers.jsonPath("$.title").value("스프링 따라하기"))
                //jsonPath ($ => 전체 $.title title에 대해 나온다.
                .andDo(MockMvcResultHandlers.print()); // 결과 콘솔에 출력
    }
}
