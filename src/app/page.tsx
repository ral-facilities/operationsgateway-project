'use client';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const sections = [
  { label: 'Introduction', id: 'introduction' },
  { label: 'The Problem', id: 'problem' },
  { label: 'The Solution', id: 'solution' },
  { label: 'The Software', id: 'software' },
  { label: 'Contact Us', id: 'contact' },
];
const APP_BAR_HEIGHT = '64px';
const APP_BAR_OFFSET = APP_BAR_HEIGHT;

export default function Home() {
  const appBarLogo =
    '/operationsgateway-project/operationsgateway-logo-white.svg';
  const appBarLogoAlt = 'Operations Gateway Logo';
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ minWidth: '200px', width: '100%' }}>
      <AppBar
        position="static"
        sx={{
          width: '100%',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          height: APP_BAR_HEIGHT,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {appBarLogo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={appBarLogo} alt={appBarLogoAlt} height="24px" />
          )}
          <Stack
            direction="row"
            spacing={6}
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: { xs: 'none', lg: 'flex' },
            }}
          >
            {sections.map((section) => (
              <Typography variant="h6" key={section.id} component="span" noWrap>
                <Link
                  href={`#${section.id}`}
                  underline="none"
                  color="inherit"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {section.label}
                </Link>
              </Typography>
            ))}
          </Stack>
          <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
            <IconButton
              color="inherit"
              onClick={handleMenuClick}
              aria-label="navigation menu"
              size="large"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            {sections.map((section) => (
              <MenuItem
                key={section.id}
                component="a"
                href={`#${section.id}`}
                onClick={handleClose}
              >
                <Typography variant="h6" component="span">
                  {section.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          left: 16,
          zIndex: 1300,
          display: 'none',
          '@media (min-width: 1800px)': {
            display: 'block',
          },
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/operationsgateway-project/UKRI_STFC_SCIENTIFIC_COMPUTING_RGB.png"
          alt="Scientific Computing Logo"
          width="320px"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box id="title" sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h2" color="primary" gutterBottom>
            Operations Gateway
          </Typography>
        </Box>

        <Box id="introduction" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body1">
            OperationsGateway is a system designed to store and provide access
            to operational data for complex scientific or industrial facilities.
            It captures the data needed by staff to ensure systems are
            functioning as expected, including temperatures, pressures,
            settings, and other critical readings. This is distinct from
            experimental data used for downstream analysis. The platform allows
            these values to be recorded over time, then displayed and analysed.
            In addition to simple scalar values, it supports a range of more
            complex data types to meet diverse operational requirements.
          </Typography>
        </Box>

        <Box id="problem" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            The Problem
          </Typography>
          <Typography variant="body1">
            Operational data is frequently distributed across multiple systems,
            stored in inconsistent formats, and difficult to access or
            interpret. Tools like spreadsheets and raw log files often lack the
            structure and interactivity needed to provide a comprehensive view
            of system performance. This fragmentation makes it challenging to
            conduct diagnostics, monitor performance, or prepare for audits
            effectively.
          </Typography>
        </Box>

        <Box id="solution" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            The Solution
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Operations Gateway offers a unified platform for accessing,
            visualising, and analysing operational data. It accommodates a wide
            range of data types, including scalar values, images, waveforms, and
            vectors. With powerful filtering, plotting, and inspection tools,
            along with session-based workflows and export options, it enables
            consistent analysis, clearer insights, and more efficient
            operational oversight.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            The system supports several data types:
          </Typography>
          <List sx={{ pl: 3, mb: 3 }}>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <>
                    <strong>Scalar values</strong> – A single number stored with
                    units.
                  </>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <>
                    <strong>Greyscale images</strong> – 8/16-bit images enhanced
                    with false colour.
                  </>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <>
                    <strong>Nullable images</strong> – Floating point images
                    supporting NaN pixels and diverging colour maps.
                  </>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <>
                    <strong>Waveforms</strong> – Pairs of x/y floating point
                    arrays with units.
                  </>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <>
                    <strong>Vector data</strong> – Arrays displayed as bar
                    charts, with labels and units.
                  </>
                }
              />
            </ListItem>
          </List>

          <Typography variant="body1" sx={{ mb: 2 }}>
            All data types are presented within the main data table, which
            includes thumbnail previews for complex values. Clicking a thumbnail
            opens a larger viewer for detailed inspection or export.
          </Typography>

          <Box sx={{ mx: 'auto', maxWidth: '100%', mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/operationsgateway-project/main-data-table.png"
                alt="Main Data Table"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 8,
                  background: '#fff',
                }}
              />
            </Box>
            <Typography
              variant="caption"
              display="block"
              align="center"
              sx={{ mt: 1 }}
            >
              <strong>Main Data Table:</strong> Shows timestamped records and
              selected data channels across multiple columns. Each column
              corresponds to a sensor, instrument, or system component.
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Users can apply filters to the table using a range of logical and
            comparison operators. These filters help narrow down relevant data
            and can be saved for future use.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            A dedicated viewer allows users to explore image data in detail.
            Images may be enhanced with false colour or diverging colour maps
            depending on the type.
          </Typography>

          <Box sx={{ mx: 'auto', maxWidth: '100%', mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/operationsgateway-project/image-viewer.png"
                alt="Image Viewer"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 8,
                  background: '#fff',
                }}
              />
            </Box>
            <Typography
              variant="caption"
              display="block"
              align="center"
              sx={{ mt: 1 }}
            >
              <strong>Image Viewer:</strong> Opens greyscale or floating point
              images at full resolution with visual enhancements for clearer
              inspection.
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Scalar values from the table can be plotted against each other using
            the plotting window, enabling trend identification and correlation
            analysis.
          </Typography>

          <Box sx={{ mx: 'auto', maxWidth: '100%', mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/operationsgateway-project/plotting-window.png"
                alt="Plotting Window"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 8,
                  background: '#fff',
                }}
              />
            </Box>
            <Typography
              variant="caption"
              display="block"
              align="center"
              sx={{ mt: 1 }}
            >
              <strong>Plotting Window:</strong> Visualises relationships between
              scalar data channels over time or across events.
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Vector data can be visualised as bar charts, supporting both
            positive and negative values with optional unit and label display.
          </Typography>

          <Box sx={{ mx: 'auto', maxWidth: '100%', mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/operationsgateway-project/vector-bar-chart-viewer.png"
                alt="Vector Bar Chart Viewer"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 8,
                  background: '#fff',
                }}
              />
            </Box>
            <Typography
              variant="caption"
              display="block"
              align="center"
              sx={{ mt: 1 }}
            >
              <strong>Vector/Bar Chart Viewer:</strong> Presents vector data
              clearly using labelled bars and unit information.
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Users can apply built-in{' '}
            <Link
              href="https://ral-facilities.github.io/operationsgateway-api/#functions"
              target="_blank"
              rel="noopener noreferrer"
            >
              functions
            </Link>{' '}
            to columns — such as mathematical operations or waveform
            transformations — to create virtual data channels that appear in the
            main table.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Sessions can be saved and reloaded later, allowing users to preserve
            filters, channel selections, and views for repeat analysis.
          </Typography>

          <Typography variant="body1">
            Any data visible in the main table or in viewer windows can be
            exported — either as rendered images or raw values — to support
            downstream analysis and reporting workflows.
          </Typography>
        </Box>

        <Box id="software" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            The Software
          </Typography>
          <Typography variant="body1">
            Operations Gateway is built using a modular microservice
            architecture:
          </Typography>
          <List sx={{ pl: 3, mb: 2 }}>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/operationsgateway-api"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
                      underline="hover"
                    >
                      OperationsGateway API
                    </Link>{' '}
                    – Stores and serves operational data from various sources.
                  </Typography>
                }
              />
            </ListItem>
          </List>
          <Typography variant="body1">
            The frontend is composed of micro frontends for flexibility and
            scalability:
          </Typography>
          <List sx={{ pl: 3, mb: 2 }}>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/inventory-management-system"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
                      underline="hover"
                    >
                      OperationsGateway UI
                    </Link>{' '}
                    – Provides the user interface for interacting with data
                    tables, charts, and images.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/scigateway"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
                      underline="hover"
                    >
                      SciGateway UI
                    </Link>{' '}
                    – Handles authentication and navigation across all modules.
                  </Typography>
                }
              />
            </ListItem>
          </List>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/operationsgateway-project/system-architecture.png"
            alt="System Architecture Diagram"
            style={{
              width: '100%',
              maxWidth: 'lg',
              height: 'auto',
              marginTop: '20px',
            }}
          />
          <Typography
            variant="caption"
            display="block"
            align="center"
            sx={{ mt: 1 }}
          >
            Operations Gateway System Architecture
          </Typography>
        </Box>

        <Box id="contact" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Please reach out via GitHub or email the development team.
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          display: 'flex',
          '@media (min-width: 1800px)': {
            display: 'none',
          },
          justifyContent: 'center',
          mt: 6,
          mb: 4,
          width: '100%',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/operationsgateway-project/UKRI_STFC_SCIENTIFIC_COMPUTING_RGB.png"
          alt="Scientific Computing Logo"
          style={{
            width: '100%',
            maxWidth: '320px',
            height: 'auto',
          }}
        />
      </Box>
    </div>
  );
}
