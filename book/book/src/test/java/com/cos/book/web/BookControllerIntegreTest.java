package com.cos.book.web;

//통합 테스트 => 전체 스프링 테스트(모든 Bean들을 똑같이 IoC 올리고 테스트 하는 것)
//Bean => 메모리에 저장되는 싱글톤 객체

import com.cos.book.domain.Book;
import com.cos.book.service.BookService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@Slf4j
@Transactional  //각각의 테스트함수가 종료될 때마다 트랜잭션을 rollback해주는 어노테이션
@AutoConfigureMockMvc  //MockMvc를 IoC에 등록해줌
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
//모든 것들이 메모리에 다 올라감 , MOCK 실제 톰캣을 올리는게 아니라 다른 톰캣으로 테스트
//RANDOM_POR = 실제 톰캣으로 테스트
public class BookControllerIntegreTest {

    @Autowired
    private MockMvc mockMvc;  //AutoConfigureMockMvc 있어야함 없으면 DI못함,IoC에 없다


//    public void test1(){
//        //DB insert
//    }
//    public void test2(){
//        //DB insert //함수 끝날때마다 초기화되어서 test1에 실행된 데이터 없는상태에서 시작
//    }
    //모든 함수 끝나면 자동 롤백

    //BDDMockito 패턴
    @Test //테스트 할려면 test어노테이션 등록
    public void save_테스트() throws Exception {
        //given (테스트를 하기 위한 준비
        Book book = new Book(null,"스프링 따라하기", "코스");
        String content = new ObjectMapper().writeValueAsString(book);

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
