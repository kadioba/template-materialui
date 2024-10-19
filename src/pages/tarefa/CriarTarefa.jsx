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

//Declaração do componente CriarTarefa, recebendo como props, do Componente ListarTarefa, os states handClose, tarefas e setTarefas
const CriarTarefa = ({handleClose, tarefas, setTarefas}) =>{
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');
  
  useEffect(() => {
    //Abaixo uma variável é declarada para armazenar o id da tarefa, somando 1 ao maior id existente atualmente no state Tarefas
    let proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
  },[]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    //Para inspecionarmos nosso código, uma boa estratégia é utilizarmos o console.log.
    //  Com o console.log, podemos visualizar o seu conteúdo na aba Console, no inspecionador de elementos, na janela do navegador
    console.log(`id: ${idTarefa} \n titulo: ${tituloTarefa} \n descrição: ${descricaoTarefa} \n inicio: ${inicioTarefa} \n fim: ${fimTarefa} \n recurso: ${recursoTarefa} \n status: ${statusTarefa}`);

    setTarefas(
      [...tarefas, 
        {
          idTarefa,
          tituloTarefa,
          descricaoTarefa,
          inicioTarefa,
          fimTarefa,
          recursoTarefa,
          statusTarefa
        }
      ]);
    //console.log(`Tarefas: ` + JSON.stringify(tarefas));
    handleClose();
  };

  return(
    <Grid container spacing={2}>
      <StyledCard sx={style}>
        <StyledCardHeader
          title="Criar Nova Tarefa"
          subheader="Preencha os detalhes da nova tarefa"
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
              <FormControl fullWidth>
                <Input id="tarefa_descricao" aria-describedby="tarefa_descricao_helper_text" value={descricaoTarefa} onChange={e => { setDescricaoTarefa(e.target.value) }} />
                <FormHelperText id="tarefa_descricao_helper_text">Descrição da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={3}>  
                <FormControl>
                  <Input id="tarefa_inicio" type="date" aria-describedby="tarefa_inicio_helper_text" value={inicioTarefa} onChange={e => { setInicioTarefa(e.target.value) }}
                    sx={{
                      color:'rgba(0, 0, 0, 0.6)',
                      fontWeight: 400,
                      paddingLeft:'13px'
                    }} 
                  />
                  <FormHelperText id="tarefa_inicio_helper_text">Início da Tarefa.</FormHelperText>
                </FormControl>
              </Grid>  
              <Grid item xs={3}>  
                <FormControl>
                  <Input id="tarefa_fim" type="date" aria-describedby="tarefa_fim_helper_text" value={fimTarefa} onChange={e => { setFimTarefa(e.target.value) }}
                    sx={{
                      color:'rgba(0, 0, 0, 0.6)',
                      fontWeight: 400,
                      paddingLeft:'13px'
                    }} 
                  />
                  <FormHelperText id="tarefa_fim_helper_text">Fim da Tarefa.</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={3}>  
                <FormControl fullWidth>
                  <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                  <Select
                    id="tarefa_recurso"
                    value={recursoTarefa}
                    label="Recurso"
                    onChange={handleRecurso}
                    size="small"
                    sx={{
                      color:'rgba(0, 0, 0, 0.6)',
                      fontWeight: 400,
                    }} 
                  >
                    <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                    <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                    <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>  
                <FormControl fullWidth>
                  <InputLabel htmlFor="tarefa_recurso">Status</InputLabel>
                  <Select
                    id="tarefa_status"
                    value={statusTarefa}
                    label="Status"
                    onChange={handleStatus}
                    size="small"
                    sx={{
                      color:'rgba(0, 0, 0, 0.6)',
                      fontWeight: 400,
                    }} 
                  >
                    <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                    <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                    <MenuItem value={'Concluída'}>Concluída</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid container spacing={2} pl={2} mt={2}>
                <Grid item xs={1}>
                  <StyledButton variant="contained" onClick={handleSalvar}>Salvar</StyledButton>
                </Grid>  
                <Grid item xs={1}>  
                  <Button size="small" variant="outlined" onClick={handleClose}>Cancelar</Button>  
                </Grid>
              </Grid>  
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </Grid>
  );
}

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default CriarTarefa;
