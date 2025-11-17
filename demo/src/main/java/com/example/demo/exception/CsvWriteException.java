package com.example.demo.exception;

public class CsvWriteException extends RuntimeException {
    public CsvWriteException(String message) {
        super(message);
    }
}