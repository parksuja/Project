package com.cos.book.web;


import com.cos.book.domain.Book;
import com.cos.book.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class BookController {

    private final BookService bookService;

    @PostMapping("/book")
    public ResponseEntity<?> save(@RequestBody Book book){  //requestBody로설정 json으로 받으면
        return new ResponseEntity<>( bookService.저장하기(book), HttpStatus.CREATED); //book이랑 ok 담아서 리턴
    }

    @GetMapping("/book")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>( bookService.모두가져오기(), HttpStatus.OK);
    }

    @GetMapping("/book/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        return new ResponseEntity<>( bookService.한건가져오기(id), HttpStatus.OK);
    }

    @PutMapping("/book/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,@RequestBody Book book){
        return new ResponseEntity<>( bookService.수정하기(id,book), HttpStatus.OK);
    }

    @DeleteMapping("/book/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id,@RequestBody Book book){
        return new ResponseEntity<>( bookService.삭제하기(id), HttpStatus.OK);
    }

}
