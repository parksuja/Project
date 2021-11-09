package com.cos.book.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor  //클래스에 존재하는 모든 필드에 대한 생성자를 자동으로 생성
@NoArgsConstructor   //파라미터가 없는 생성자를 생성
@Data
@Entity  //서버 실행시에 Object Relation Mapping(테이블이 h2에 생성) 이 됨 (ORM시작)
public class Book {
    @Id //PK를 해당 변수로 하겠다는 뜻
//    자동 증가
    @GeneratedValue(strategy = GenerationType.IDENTITY) //해당 데이터베이스 번호증가를 따라갑니다.
    private Long id;

    private String title;
    private String author;
}
