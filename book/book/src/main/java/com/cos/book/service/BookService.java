package com.cos.book.service;


import com.cos.book.domain.Book;
import com.cos.book.domain.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@RequiredArgsConstructor //final으로 된 생성자 만들어줌 자동으로 DI이 됨
//빈으로 등록되어야함 , 기능을 정의할 수 있고, 트랜잭션을 관리할 수 있음
@Service
public class BookService {

    //함수 => 송금() -> 레포지토리에 여러개의 함수 실행 -> commit or rollback
    private final BookRepository bookRepository;

    @Transactional
    public Book 저장하기(Book book){
        return bookRepository.save(book);
    }

    @Transactional(readOnly = true) //JPA 변경감지라는 내부 기능 활성화 X, 내부 연산 줄인다.
    //update시의 정합성을 유지해줌, insert 팬텀현상 못막음
    public Book 한건가져오기(Long id){
        return bookRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("ID를 확인하세요"));
    }

    @Transactional(readOnly = true)
    public List<Book> 모두가져오기(){
        return bookRepository.findAll();
    }

    @Transactional
    public Book 수정하기(Long id, Book book){
        //더티체킹 update 치기
        Book bookEntity = bookRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("ID를 확인하세요"));

        //영속화(book오브젝트) => 스프링 내부 메모리 공간에 들고있음 (따로)
        // 실제 데이터 베이스에 있는 파싱해서 entity로 가져옴
        bookEntity.setTitle(book.getTitle()); //영속성 컨텍스트에 보관
        bookEntity.setAuthor(book.getAuthor());
        return bookEntity;
    } //수정하기 함수 종료될때 함수 종료 => 트랜잭션 종료 => 영속화 되어있는 데이터를 DB로 갱신(flush) => commit =>더티체킹

    @Transactional
    public String 삭제하기(Long id){
         bookRepository.deleteById(id);  //리턴 타입이 없음 , 오류가 터지면 익셉션을 타니깐 신경안써도됨
        return "ok"; //ok떨어지면 삭제 잘된것
    }
}
