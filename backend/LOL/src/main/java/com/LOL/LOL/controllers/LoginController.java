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
import com.LOL.LOL.models.Login;
import com.LOL.LOL.models.Usuario;
import com.LOL.LOL.repository.UsuarioRepository;
import com.LOL.LOL.utils.EncryptionUtil;
import com.LOL.LOL.repository.EnderecoRepository;
import com.LOL.LOL.models.usuarioRequisicao;

@RestController
public class LoginController {

	 @Autowired
	private UsuarioRepository ur ;
	
	 @PostMapping(value = "/logar")
	 public ResponseEntity<Object> logar(@RequestBody Login login) {
	     try {
	         Usuario usuario = ur.findByEmail(login.getEmail());
	         
	         if (usuario == null) {
	             return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                                  .body("Email/Senha Incorreto(s)");
	         }
	         
	         String senhaDescriptografada = EncryptionUtil.decrypt(usuario.getSenha());
	         
	         // Comparando senhas
	         if (login.getSenha().equals(senhaDescriptografada)) {
	             return ResponseEntity.ok(usuario);
	         } else {
	             return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                                  .body("Email/Senha Incorreto(s)");
	         }
	     } catch (Exception e) {
	         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                              .body("Erro ao processar o login: " + e.getMessage());
	     }
	 }
	
}
