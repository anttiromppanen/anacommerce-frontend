import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Box,
  Card, CardContent, CardMedia, Grid, Typography, Stack, useMediaQuery, styled, Container, Divider,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';

import { useFetchSubcategories } from '../../hooks/useGetSubcategories';

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 150,
  width: 150,

  [theme.breakpoints.only('xs')]: {
    height: 50,
    width: 50,
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

function Category() {
  const { category } = useParams();
  const { isLoading, data } = useFetchSubcategories(category);
  const theme = useTheme();
  const mobileViewIsActive = useMediaQuery(theme.breakpoints.only('xs'));

  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="xl">
      <Box
        mt={theme.spacing(4)}
      >
        <Typography variant="h2">
          {category.toUpperCase()}
        </Typography>
      </Box>
      <Grid
        container
        mt={theme.spacing(0.5)}
        spacing={mobileViewIsActive ? 1 : 5}
      >
        {
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
              <StyledCardContainer>
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
          ))
        }
      </Grid>
    </Container>
  );
}

export default Category;
