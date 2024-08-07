package com.LOL.LOL.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.LOL.LOL.models.Usuario;


public interface UsuarioRepository extends CrudRepository<Usuario,Integer>{
	Usuario findByEmail(String email);

	Usuario findById(int id);

	List<Usuario> findByTipo(String tipo);
	
}
