package com.cos.book.domain;


//단위 테스트 => Repository는 DB관련된 Bean이 IoC에 등록되면 됨

import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
//가짜 DB로 테스트, Replace.NONE 실제 DB로 테스트
@DataJpaTest //jpa관련된 애들만 메모리에 뜹니다. , Repository들을 다 IoC 등록해줌
public class BookRepositoryUnitTest {

    
    private BookRepository bookRepository;
}
