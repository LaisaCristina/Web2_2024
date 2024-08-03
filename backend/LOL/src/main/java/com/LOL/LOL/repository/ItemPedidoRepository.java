package com.LOL.LOL.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.LOL.LOL.models.ItemPedido;

public interface ItemPedidoRepository extends CrudRepository<ItemPedido,Integer>{

}
