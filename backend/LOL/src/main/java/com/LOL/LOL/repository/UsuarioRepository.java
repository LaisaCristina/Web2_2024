package com.LOL.LOL.repository;

import com.LOL.LOL.models.Usuario;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {
	Usuario findByEmail(String email);

	Usuario findById(int id);

	List<Usuario> findByTipo(String tipo);

}
