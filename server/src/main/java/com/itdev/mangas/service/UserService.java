package com.itdev.mangas.service;

import com.itdev.mangas.domain.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();

    void populateSampleData();
    
    User getUser(Long id);

    User createUser(User user);

    User findUserByEmail(String email);

    User findUserByEmailAndPassword(String email, String password);
}
