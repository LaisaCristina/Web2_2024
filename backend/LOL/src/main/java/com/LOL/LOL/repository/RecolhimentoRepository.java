package com.LOL.LOL.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.LOL.LOL.models.Recolhimento;

public interface RecolhimentoRepository extends CrudRepository<Recolhimento,Integer>{

}
