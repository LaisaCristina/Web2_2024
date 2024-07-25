package com.LOL.LOL.models;

import java.io.Serializable;
import javax.validation.constraints.NotNull;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


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
	
	
}