/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TabbedComponent = ({ active, selectTab, children }) => {
    return (
        <Button
            onClick={selectTab}
            sx={{
                mr: 3,
                fontWeight: 'bold',
                fontSize: '1.125rem', // equivalent to text-lg
                color: active ? 'white' : '#ADB7BE',
                borderBottom: 2,
                borderColor: 'text.primary',
                '&:hover': {
                    color: 'white',
                    borderColor: 'text.primary',
                    transform: 'translateY(-1px)',
                    transition: 'all 100ms ease-in-out',
                },
            }}
        >
            <Typography component="span">
                {children}
            </Typography>
        </Button>
    );
};

export default TabbedComponent;
