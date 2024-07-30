package com.LOL.LOL.controllers;

import javax.validation.Valid;

import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

import com.LOL.LOL.models.Endereco;
import com.LOL.LOL.models.Usuario;
import com.LOL.LOL.repository.UsuarioRepository;
import com.LOL.LOL.repository.EnderecoRepository;
import com.LOL.LOL.models.usuarioRequisicao;

@RestController
public class UsuarioController {

	 @Autowired
	private UsuarioRepository ur ;
	 
	 @Autowired
	 private EnderecoRepository er;
	
	// CADASTRO 
	@PostMapping(value = "/cadastrarUsuario")
	public ResponseEntity<Object> inserir(@RequestBody usuarioRequisicao requisicao) {
	    try {
	        Usuario usuario = requisicao.getUsuario();
	        Endereco endereco = requisicao.getEndereco();
	        
	        Endereco savedEndereco = er.save(endereco);
	        usuario.setIdEndereco(savedEndereco.getId());
	        
	        Usuario savedUsuario =  ur.save(usuario);
	        savedEndereco.setUsuario(savedUsuario);
	        er.save(savedEndereco);
	        
	        return ResponseEntity.ok(usuario);
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                             .body("Erro ao cadastrar o usuário: " + e.getMessage());
	    }
	}
	
	@PostMapping(value = "/cadastrarEndereco")
	public ResponseEntity<Object> inserirEndereco(@RequestBody Endereco endereco){
	    try {
	        er.save(endereco);
	        return ResponseEntity.ok(endereco);
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                             .body("Erro ao cadastrar o usuário: " + e.getMessage());
	    }		
	}
}
