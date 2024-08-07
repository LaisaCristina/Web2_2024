package com.LOL.LOL.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.LOL.LOL.models.ItemPedido;
import com.LOL.LOL.models.Pedido;
import com.LOL.LOL.repository.ItemPedidoRepository;
import com.LOL.LOL.repository.PedidoRepository;

@RestController
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;

    @PostMapping("/criarPedido")
    public ResponseEntity<Pedido> criarPedido(@RequestBody Pedido pedido) {
        if (pedido.getUsuario() == null || pedido.getUsuario().getId() == null) {
            return ResponseEntity.badRequest().build(); // Validação para garantir que o usuário está presente
        }
        
        System.out.println(pedido.toString());
        
        if (pedido.getItens() == null) {
            pedido.setItens(new ArrayList<>());
        }

        for (ItemPedido item : pedido.getItens()) {
            item.setPedido(pedido);
        }

        Pedido novoPedido = pedidoRepository.save(pedido);
        return ResponseEntity.ok(novoPedido);
    }
}