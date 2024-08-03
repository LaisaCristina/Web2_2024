package com.LOL.LOL.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.LOL.LOL.models.Pedido;

public interface PedidoRepository extends CrudRepository<Pedido,Integer>{

}
