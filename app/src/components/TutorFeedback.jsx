import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TutorFeedback() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate("/tutorfeedback"); // Navigate to the desired route
  };

  return (
    <Card sx={{ minWidth: 550, minHeight: 300 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 30 }}>
          View Tutor Feedback
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', marginTop: '100px' }}>
        <Button
          size="small"
          variant="outlined"
          onClick={handleButtonClick} // Add click handler
          sx={{
            '&:hover': {
              backgroundColor: 'lightblue',
              color: 'white',
            }
          }}
        >
          View Report
        </Button>
      </CardActions>
    </Card>
  );
}
