/* eslint-disable react/prop-types */
import React from 'react';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useLocation } from 'react-router-dom';

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 150,
  width: 150,

  [theme.breakpoints.only('xs')]: {
    height: 50,
    width: 50,
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.only('xs')]: {
    padding: 0,
    paddingLeft: theme.spacing(1),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
}));

const StyledCardContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.grey[100],
  width: 'auto',

  [theme.breakpoints.only('xs')]: {
    backgroundColor: 'inherit',
    padding: 0,
    width: '100%',
  },
}));

function SubcategoryGrid({ isLoading, data }) {
  const theme = useTheme();
  const mobileViewIsActive = useMediaQuery(theme.breakpoints.only('xs'));
  const { pathname } = useLocation();

  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    data.map((subcategory) => (
      <Grid
        item
        container
        justifyContent="center"
        xs={12}
        sm={4}
        md={3}
        lg={2}
        key={subcategory.subcategoryName}
      >
        <StyledCardContainer
          component={Link}
          to={`${pathname}/${subcategory.subcategoryName.toLowerCase()}`}
        >
          <Card
            sx={{ width: mobileViewIsActive ? '100%' : 150 }}
            elevation={0}
            component={Stack}
            direction={mobileViewIsActive ? 'row' : 'column'}
            alignItems="center"
          >
            <StyledCardMedia
              image={subcategory.subcategoryIcon}
              title="Subcategory icon"
            />
            <StyledCardContent
              component={Grid}
              container
              justifyContent={mobileViewIsActive ? 'space-between' : 'center'}
              alignItems="center"
            >
              <Typography variant="h5">
                {subcategory.subcategoryName}
              </Typography>
              {
                mobileViewIsActive && <ArrowForwardIosIcon />
              }
            </StyledCardContent>
          </Card>
          {
            mobileViewIsActive && <Divider sx={{ pt: 1 }} />
          }
        </StyledCardContainer>
      </Grid>
    )));
}

export default SubcategoryGrid;
