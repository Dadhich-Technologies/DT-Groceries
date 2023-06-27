import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import "./filter.css";
import Card1 from './Card1';
import { ArrowRightAlt } from '@mui/icons-material';

export default function Filter() {
  return (
    <>
      <div className='filter_shop'>
        <div className="accordian_shop">
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Filter
              </Typography>

              <Accordion sx={{ maxWidth: 300 }} defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography aria-expanded="true" aria-controls="collapseOne">Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="Fruits[12]" />
                      <FormControlLabel control={<Checkbox />} label="Spices[15]" />
                      <FormControlLabel control={<Checkbox />} label="Vagetable[10]" />
                    </FormGroup>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ maxWidth: 300 }} defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Discount</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="12% Discount" />
                      <FormControlLabel control={<Checkbox />} label="15% Discount" />
                      <FormControlLabel control={<Checkbox />} label="17% Discount" />
                    </FormGroup>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ maxWidth: 300 }} defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Brand</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="Fresho" />
                      <FormControlLabel control={<Checkbox />} label="Goplan" />
                      <FormControlLabel control={<Checkbox />} label="Kendo" />
                    </FormGroup>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ maxWidth: 300 }} defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Price</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="$10.00-$49.00" />
                      <FormControlLabel control={<Checkbox />} label="$50.00-$99.00" />
                      <FormControlLabel control={<Checkbox />} label="$200.00+" />
                    </FormGroup>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </div>
        <div className="main_shop">
          <div className="heading_shop">
            <div className="option_shop">
              <p>Showing 9 of 18 prodcuts</p>
            </div>
            <div className="right-filter_shop">
              <p>Default Sorting</p>
              <p>  </p>
            </div>
          </div>
          <div className="sort_shop">
            <p>Your Filter </p>
          </div>
          <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
          <div className='content_shop'>
            <Card1/>
          </div>
        </div>
      </div>
        <div className="next_shop">
          <div className="first_shop"><p>1</p></div>
          <div className="first_shop"><p>2</p></div>
          <div className="first_shop"><p>3</p></div>
          <div className="first_shop"><p>4</p></div>
          <div className="second_shop"><ArrowRightAlt>yes</ArrowRightAlt></div>
        </div>
    </>
  );
}
