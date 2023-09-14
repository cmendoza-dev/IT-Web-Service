const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs'); // Configura EJS como el motor de plantillas

// Configura las rutas
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/it_about');
const blogRoute = require('./routes/it_blog');
const blogDetailRoute = require('./routes/it_blog_detail');
const blogGridRoute = require('./routes/it_blog_grid');
const careerRoute = require('./routes/it_career');
const cartRoute = require('./routes/it_cart');
const checkoutRoute = require('./routes/it_checkout');
const computerRepairRoute = require('./routes/it_computer_repair');
const contactRoute = require('./routes/it_contact');
const contact2Route = require('./routes/it_contact_2');
const dataRecoveryRoute = require('./routes/it_data_recovery');
const errorRoute = require('./routes/it_error');
const faqRoute = require('./routes/it_faq');
const homeRoute = require('./routes/it_home');
const homeDarkRoute = require('./routes/it_home_dark');
const mobileServiceRoute = require('./routes/it_mobile_service');
const networkSolutionRoute = require('./routes/it_network_solution');
const newsRoute = require('./routes/it_news');
const priceRoute = require('./routes/it_price');
const privacyPolicyRoute = require('./routes/it_privacy_policy');
const serviceRoute = require('./routes/it_service');
const serviceDetailRoute = require('./routes/it_service_detail');
const serviceListRoute = require('./routes/it_service_list');
const shopRoute = require('./routes/it_shop');
const shopDetailRoute = require('./routes/it_shop_detail');
const technSupportRoute = require('./routes/it_techn_support');
const termConditionRoute = require('./routes/it_term_condition');
const makeAppointmentRoute = require('./routes/make_appointment');

app.use('/', indexRoute);
app.use('/it_about', aboutRoute);
app.use('/it_blog', blogRoute);
app.use('/it_blog_detail', blogDetailRoute);
app.use('/it_blog_grid', blogGridRoute);
app.use('/it_career', careerRoute);
app.use('/it_cart', cartRoute);
app.use('/it_checkout', checkoutRoute);
app.use('/it_computer_repair', computerRepairRoute);
app.use('/it_contact', contactRoute);
app.use('/it_contact_2', contact2Route);
app.use('/it_data_recovery', dataRecoveryRoute);
app.use('/it_error', errorRoute);
app.use('/it_faq', faqRoute);
app.use('/it_home', homeRoute);
app.use('/it_home_dark', homeDarkRoute);
app.use('/it_mobile_service', mobileServiceRoute);
app.use('/it_network_solution', networkSolutionRoute);
app.use('/it_news', newsRoute);
app.use('/it_price', priceRoute);
app.use('/it_privacy_policy', privacyPolicyRoute);
app.use('/it_service', serviceRoute);
app.use('/it_service_detail', serviceDetailRoute);
app.use('/it_service_list', serviceListRoute);
app.use('/it_shop', shopRoute);
app.use('/it_shop_detail', shopDetailRoute);
app.use('/it_techn_support', technSupportRoute);
app.use('/it_term_condition', termConditionRoute);
app.use('/make_appointment', makeAppointmentRoute);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
