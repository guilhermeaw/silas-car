import {
  Card,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DeleteOutline as DeleteOutlineIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

import { Customization } from '../../../models/Customization';
import { useDeleteCustomization } from '../../../services/mutations';

type CustomizationItemProps = {
  item: Customization;
  adminMode?: boolean;
};

export const CustomizationItem = ({
  item,
  adminMode = false,
}: CustomizationItemProps) => {
  const navigate = useNavigate();

  const { mutateAsync: deleteCustomization } = useDeleteCustomization();

  const handleDeleteCustomization = async () => {
    await deleteCustomization(item._id);
  };

  const formattedDate = useMemo(() => {
    return new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    }).format(new Date(item.date));
  }, [item.date]);

  return (
    <Grid key={item._id} xs={6} item>
      <Card
        sx={{
          padding: '1rem',
          display: 'flex',
          position: 'relative',
        }}
      >
        <img
          src={item.img_url}
          alt="car"
          width="210px"
          height="120px"
          style={{ borderRadius: 4 }}
        />

        <Stack marginLeft="1rem" width="100%" justifyContent="space-between">
          <div>
            <Typography variant="h3">{item.title}</Typography>
            <Typography variant="subtitle1">{formattedDate}</Typography>

            <Tooltip title={item.description}>
              <Typography
                variant="subtitle2"
                sx={{
                  marginTop: '0.8rem',
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  minHeight: '44px',
                }}
              >
                {item.description}
              </Typography>
            </Tooltip>
          </div>
        </Stack>

        {adminMode && (
          <Stack
            direction="row"
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <IconButton
              aria-label="Editar serviço"
              onClick={() => {
                navigate(`/edit-job/${item._id}`);
              }}
            >
              <EditIcon />
            </IconButton>

            <IconButton
              aria-label="Deletar serviço"
              onClick={handleDeleteCustomization}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Stack>
        )}
      </Card>
    </Grid>
  );
};
