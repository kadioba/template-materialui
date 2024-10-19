import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

//Declaração do componente EditarTarefa, recebendo como props, do Componente ListarTarefa, os states handCloseEditar,
// idTarefaSelecionada, tarefas, tarefa e setTarefas
const EditarTarefa = ({handleCloseEditar, idTarefaSelecionada, tarefas, tarefa, setTarefas}) =>{
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  //Abaixo setamos os valores dos states (que popularão o formulário mais abaixo) com os valores do state Tarefa,
  //  recebido como props do componente ListarTarefa.
  useEffect(() => {
    //console.log('Tarefa selecionada: ' + JSON.stringify(tarefa));
    setIdTarefa(idTarefaSelecionada);
    setTituloTarefa(tarefa.tituloTarefa);
    setDescricaoTarefa(tarefa.descricaoTarefa);
    setInicioTarefa(tarefa.inicioTarefa);
    setFimTarefa(tarefa.fimTarefa);
    setRecursoTarefa(tarefa.recursoTarefa);
    setStatusTarefa(tarefa.statusTarefa);
  },[]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleEditar = () => {
    //console.log(`id: ${idTarefa} \n titulo: ${tituloTarefa} \n descrição: ${descricaoTarefa} \n inicio: ${inicioTarefa} \n fim: ${fimTarefa} \n recurso: ${recursoTarefa} \n status: ${statusTarefa}`);
    //console.log('idTarefaSelecionada: ' + idTarefaSelecionada);
    setTarefas(current =>
      current.map(obj => {
        if (obj.idTarefa === idTarefaSelecionada) {
          console.log('obj: ' + JSON.stringify(obj));          
          return {...obj, 
              idTarefa:idTarefaSelecionada,
              tituloTarefa:tituloTarefa,
              descricaoTarefa:descricaoTarefa,
              inicioTarefa:inicioTarefa,
              fimTarefa:fimTarefa,
              recursoTarefa:recursoTarefa,
              statusTarefa:statusTarefa
          };
        }

        return obj;
      }),
    );

    //console.log(`Tarefas Editadas: ` + JSON.stringify(tarefas));
    handleCloseEditar();
  };

  const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  }));

  const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '& .MuiCardHeader-title': {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    '& .MuiCardHeader-subheader': {
      color: theme.palette.primary.contrastText,
      opacity: 0.8,
    },
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 2,
    textTransform: 'none',
    fontWeight: 600,
  }));

  return(
    <Grid container spacing={2}>
      <StyledCard sx={style}>
        <StyledCardHeader
          title="Editar Tarefa"
          subheader="Modifique os detalhes da tarefa"
        /> 
        <CardContent sx={{
          width: '95%',
          maxWidth: '100%',
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="tarefa_titulo">Título da Tarefa</InputLabel>
                <Input id="tarefa_titulo" value={tituloTarefa} onChange={e => { setTituloTarefa(e.target.value) }} />
              </FormControl>
            </Grid>
            <Grid item xs={12}>  
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="tarefa_descricao">Descrição da Tarefa</InputLabel>
                <Input id="tarefa_descricao" multiline rows={3} value={descricaoTarefa} onChange={e => { setDescricaoTarefa(e.target.value) }} />
              </FormControl>
            </Grid>
            <Grid item xs={6}>  
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_inicio">Início da Tarefa</InputLabel>
                <Input id="tarefa_inicio" type="date" value={inicioTarefa} onChange={e => { setInicioTarefa(e.target.value) }} />
              </FormControl>
            </Grid>  
            <Grid item xs={6}>  
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_fim">Fim da Tarefa</InputLabel>
                <Input id="tarefa_fim" type="date" value={fimTarefa} onChange={e => { setFimTarefa(e.target.value) }} />
              </FormControl>
            </Grid>
            <Grid item xs={6}>  
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  label="Recurso"
                  onChange={handleRecurso}
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>  
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_status">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  label="Status"
                  onChange={handleStatus}
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end', padding: 2 }}>
          <StyledButton variant="contained" onClick={handleEditar}>Salvar</StyledButton>
          <StyledButton variant="outlined" onClick={handleCloseEditar}>Cancelar</StyledButton>  
        </CardActions>
      </StyledCard>
    </Grid>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default EditarTarefa;
