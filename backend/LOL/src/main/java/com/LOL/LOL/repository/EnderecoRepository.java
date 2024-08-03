package com.LOL.LOL.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.LOL.LOL.models.Endereco;

public interface EnderecoRepository extends CrudRepository<Endereco,Integer>{

}
