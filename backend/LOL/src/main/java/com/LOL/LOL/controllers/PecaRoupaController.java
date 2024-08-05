package com.LOL.LOL.controllers;

import java.util.List;

import javax.validation.Valid;

import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
import com.LOL.LOL.models.PecaRoupa;
import com.LOL.LOL.models.Usuario;

import com.LOL.LOL.repository.PecaRoupaRepository;
import com.LOL.LOL.models.usuarioRequisicao;

@RestController
public class PecaRoupaController {

	@Autowired
	private PecaRoupaRepository prr;
	
	// CADASTRO 
	@PostMapping(value = "/cadastrarRoupa")
	public ResponseEntity<Object> inserir(@RequestBody PecaRoupa roupa) {
		
		try {
		PecaRoupa response = prr.save(roupa);
		
		return ResponseEntity.ok(response);
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                             .body("Erro ao cadastrar o roupa: " + e.getMessage());
	    }	
	}
	
    // GET ALL
    @GetMapping(value = "/pecasRoupas")
    public ResponseEntity<Object> getAll() {
        try {
            List<PecaRoupa> pecasRoupas = (List<PecaRoupa>) prr.findAll();
            return ResponseEntity.ok(pecasRoupas);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Erro ao buscar as peças de roupa: " + e.getMessage());
        }
    }
}
