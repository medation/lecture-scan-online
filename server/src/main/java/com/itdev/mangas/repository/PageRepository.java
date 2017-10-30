package com.itdev.mangas.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.itdev.mangas.domain.Page;

@Repository("pageRepository")
public interface PageRepository extends CrudRepository<Page, Long>{

}
