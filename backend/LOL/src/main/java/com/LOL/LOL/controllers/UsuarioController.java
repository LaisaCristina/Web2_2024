package com.LOL.LOL.controllers;

import javax.validation.Valid;

import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.LOL.LOL.models.Usuario;
import com.LOL.LOL.repository.UsuarioRepository;

@CrossOrigin
@RestController
public class UsuarioController {

	 @Autowired
	private UsuarioRepository ur ;
	
	// CADASTRO 
	@PostMapping(value = "/cadastrarUsuario")
	public Usuario inserir(@RequestBody Usuario usuario) {
		
		ur.save(usuario);
		return usuario;
	}
	

}
