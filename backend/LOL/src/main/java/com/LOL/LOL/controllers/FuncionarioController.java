package com.LOL.LOL.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.LOL.LOL.models.Usuario;
import com.LOL.LOL.repository.UsuarioRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/funcionarios")
public class FuncionarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // GET TIPO 'F'
    @GetMapping
    public ResponseEntity<List<Usuario>> getAllFuncionarios() {
        try {
            List<Usuario> funcionarios = (List<Usuario>) usuarioRepository.findByTipo("F");
            return ResponseEntity.ok(funcionarios);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(null);
        }
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getFuncionarioById(@PathVariable Integer id) {
        Optional<Usuario> funcionario = usuarioRepository.findById(id);
        return funcionario.map(ResponseEntity::ok)
                          .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
    }

    // CREATE
    @PostMapping
    public ResponseEntity<Usuario> createFuncionario(@RequestBody Usuario funcionario) {
        try {
            Usuario novoFuncionario = usuarioRepository.save(funcionario);
            return ResponseEntity.status(HttpStatus.CREATED).body(novoFuncionario);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> updateFuncionario(@PathVariable Integer id, @RequestBody Usuario funcionarioAtualizado) {
        Optional<Usuario> funcionarioExistente = usuarioRepository.findById(id);
        if (funcionarioExistente.isPresent()) {
            Usuario funcionario = funcionarioExistente.get();
            funcionario.setNome(funcionarioAtualizado.getNome());
            funcionario.setEmail(funcionarioAtualizado.getEmail());
            funcionario.setDataNascimento(funcionarioAtualizado.getDataNascimento()); //Adicionando Data Nasc
            Usuario funcionarioSalvo = usuarioRepository.save(funcionario);
            return ResponseEntity.ok(funcionarioSalvo);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFuncionario(@PathVariable Integer id) {
        try {
            if (usuarioRepository.existsById(id)) {
                usuarioRepository.deleteById(id);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
