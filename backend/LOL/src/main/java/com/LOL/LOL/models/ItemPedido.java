package com.LOL.LOL.models;

import jakarta.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
public class ItemPedido implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pedido_id", nullable = false)
    private Pedido pedido;

    @ManyToOne
    @JoinColumn(name = "roupa_id", nullable = false)
    private PecaRoupa roupa;

    @NotNull
    private Integer qtde;

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

    public PecaRoupa getRoupa() {
        return roupa;
    }

    public void setRoupa(PecaRoupa roupa) {
        this.roupa = roupa;
    }

    public Integer getQtde() {
        return qtde;
    }

    public void setQtde(Integer qtde) {
        this.qtde = qtde;
    }
}