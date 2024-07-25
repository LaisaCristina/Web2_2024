package com.LOL.LOL.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import jakarta.persistence.GenerationType;
import java.io.Serializable;
import java.util.List;


@Entity
@Table(name = "pecas_roupas")
public class PecaRoupa implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "descricao", nullable = false, length = 255)
    @NotEmpty(message = "A descrição não pode estar vazia")
    private String descricao;

    @Column(name = "preco", nullable = false)
    @NotNull(message = "O preço não pode estar vazio")
    private Float preco;

    @Column(name = "prazo", nullable = false)
    @NotNull(message = "O prazo não pode estar vazio")
    private Integer prazo;

    @OneToMany(mappedBy = "roupa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ItemPedido> items;;
    
    // Getters e Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Float getPreco() {
        return this.preco;
    }

    public void setPreco(Float preco) {
        this.preco = preco;
    }

    public Integer getPrazo() {
        return prazo;
    }

    public void setPrazo(Integer prazo) {
        this.prazo = prazo;
    }
}