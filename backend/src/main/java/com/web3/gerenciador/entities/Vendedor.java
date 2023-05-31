package com.web3.gerenciador.entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
@Entity
@Table(name = "tb_vendedor")
public class Vendedor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	
	@ManyToOne
    @JoinColumn(name = "filial_id")
    private Filial filial;
	private Double total_vendido;
	private Long telefone;
	
	
	public Vendedor() {
		
	

}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Filial getFilial() {
		return filial;
	}


	public void setFilial(Filial filial) {
		this.filial = filial;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public Double getTotal_vendido() {
		return total_vendido;
	}


	public void setTotal_vendido(Double total_vendido) {
		this.total_vendido = total_vendido;
	}


	public Long getTelefone() {
		return telefone;
	}


	public void setTelefone(Long telefone) {
		this.telefone = telefone;
	}

}
