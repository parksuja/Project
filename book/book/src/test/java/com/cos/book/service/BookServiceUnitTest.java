package com.cos.book.service;

//BookRepository만(Service관련된) IoC(메모리)에 띄우면 됨


import com.cos.book.domain.BookRepository;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class) // BookRepository를 Bean에 띄우면 데이터베이스까지 같이 테스트
//BookRepository => 가짜 객체로 만들 수 있음 Mockito가 만들어줌
public class BookServiceUnitTest {


    @InjectMocks //BookService객체가 만들어질때 BookServiceUnitTest 파일에 @Mock로 등록된 모든 애들을 주입받는다.
    private BookService bookService;

    @Mock
    private BookRepository bookRepository;  //IoC로 bookRepository 안들고 있어서 원래 값 null

}
