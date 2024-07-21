package com.LOL.LOL.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import jakarta.persistence.GenerationType;

public class Usuario {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CPF", unique = true, nullable = false, length = 11)
    @NotEmpty(message = "O CPF não pode estar vazio")
    @Size(min = 11, max = 11, message = "O CPF deve ter 11 caracteres")
    private String cpf;

    @Column(name = "nome", nullable = false, length = 255)
    @NotEmpty(message = "O nome não pode estar vazio")
    private String nome;

    @Column(name = "email", unique = true, nullable = false, length = 255)
    @Email(message = "Email deve ser válido")
    @NotEmpty(message = "O email não pode estar vazio")
    private String email;

    @Column(name = "endereco", nullable = false, columnDefinition = "TEXT")
    @NotEmpty(message = "O endereço não pode estar vazio")
    private String endereco;

    @Column(name = "telefone", nullable = false, length = 20)
    @NotEmpty(message = "O telefone não pode estar vazio")
    private String telefone;

    @Column(name = "senha", nullable = false, length = 255)
    @NotEmpty(message = "A senha não pode estar vazia")
    private String senha;

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}

