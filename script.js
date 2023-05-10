<script>
		
		alert('Gerador de guias de malote');
		var nome = prompt('SEU NOME:');

		const cre = Number(window.prompt("CRE:"));

		const dia = Number(window.prompt("Dia: "));
		let mes = Number(window.prompt("Mês: "));

		document.write(' <center> <h2>GUIA DE MALOTE <br>');
		document.write(cre + '° CRE - ' + dia + '/' + mes + '/2022 </h2> </center> <br>');

		document.write('<h4> Para: ' + cre + '° CRE <br>');
		document.write('Data: ' + dia + '/' + mes + '/2022 <br>');
		document.write('Remetente: ' + nome + ' - PROTOCOLO <br> Secretaria Estadual da Educação do RS </h4> <br> <hr> <br> ');

		document.write('<center> <h2>Itens enviados</h2> </center> <br> <hr> <br> ');

		maloteItens()

		function maloteItens() {

			var item1 = prompt('Item: \n Digite o número indicado: \n 1 - Processo \n 2 - Pacote/Envelope \n 3 - Outro ');

			if (item1 == '1') {
				processos();
			} else if (item1 == '2') {
				pacote();
			} else if (item1 == '3') {
				outros();
			} else {
				alert('Digite "1" para processos, "2" para pacotes ou envelopes e 3 para um item diferente');
			}
		}

		//Funções

		function processos() {

				var setor = prompt('Setor: \n 1 - AJU-GAB-SE \n 2 - PROT \n 3 - ARQ \n 4 - DRH \n 5 - DP \n 6 - SUEPRO \n 7 - DOE \n 8 - DEPLAN \n 9 - IPE ');
				var guia = prompt('Guia: ');

				if (setor == '1') {
				document.write('❏ AJU-GAB-SE: ' + guia + '<br> <br> <hr> <br>');
				} else if (setor == '2') {
				document.write('PROTOCOLO: ' + guia + '<br> <br> <hr> <br>');
				} else if (setor == '3') {
				document.write('ARQUIVO: ' + guia + '<br> <br> <hr> <br>');
				} else if (setor == '4') {
				document.write('DRH: ' + guia + '<br> <br> <hr> <br>');
				} else if (setor == '5') {
				document.write('DP: ' + guia + '<br> <br> <hr> <br>');
				} else if (setor == '6') {
				document.write('SUEPRO: ' + guia + '<br> <br> <hr> <br>');
				} else if (setor == '7') {
				document.write('DOE: ' + guia + '<br> <br> <hr> <br>');
				} else if (setor == '8') {
				document.write('DEPLAN: ' + guia + '<br> <br> <hr> <br>');
				} else if (setor == '9') {
				document.write('IPE: ' + guia + '<br> <br> <hr> <br>');
				}

		var prox = prompt('Deseja inserir mais processos? \n 1 - Sim \n 2 - Não')

			if (prox == '1') {
				processos()
			} else if (prox == '2') {
				var maisItens = prompt('Deseja adicionar mais itens na guia de malote? \n 1 - Sim \n 2 - Não');
			}

			if (maisItens == '1') {
				maloteItens();
			} 

		}

		function pacote() {
			var description = prompt('Descreva o item:');
			document.write ('Pacote: ' + description + '<br> <br> <hr> <br>');

		var proxpacote = prompt('Deseja inserir mais pacotes? \n 1 - Sim \n 2 - Não');

		if (proxpacote == '1') {
			pacote();
		} else if (proxpacote == '2') {
				var maisItens = prompt('Deseja adicionar mais itens na guia de malote? \n 1 - Sim \n 2 - Não');
			}

			if (maisItens == '1') {
				maloteItens();
			}
			
		}

		function outros() {
			var description = prompt('Descreva o item:');
			document.write ('Outro: ' + description + '<br> <br> <hr> <br>');

			var proxpacote = prompt('Deseja inserir mais itens? \n 1 - Sim \n 2 - Não');

		if (proxpacote == '1') {
			outros();
		} else if (proxpacote == '2') {
				var maisItens = prompt('Deseja adicionar mais itens na guia de malote? \n 1 - Sim \n 2 - Não');
			}

			if (maisItens == '1') {
				maloteItens();
			}
		} 

	</script>