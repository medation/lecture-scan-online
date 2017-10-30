package com.itdev.mangas.repository;

import com.itdev.mangas.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
public interface UserRepository extends CrudRepository<User, Long> {

    User findOneByEmail(String email);

    User findOneByEmailAndPassword(String email, String password);
}
