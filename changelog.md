# CHANGE LOG

16 Feb 2021
2.6.1
### CHANGED
- Redactional on contract agreed email for donors and contract with "Pengiriman bukti pembayaran dapat diupload di website SEEDS melalui link yang akan kami kirimkan via email setiap tanggal 25 dan 3."


10 Feb 2021
2.6
### ADDED
- Whatsapp button on form registration
### UPDATE
-  Statistic data on homepage


7 Feb 2021
2.5
### FIX
-  PDF Not open on new donor period
2.4.2
### CHANGE
-  CTA button on hero main Website
-  CP on footer main website

5 Feb 2021
2.4.1
### FIXED
-  Degree level on re registration not open
-   error validation on reregistration
2.4
### CHANGE
-  seedscholarship to SEED Scholarship  on registration

### ADDED
-  degree level for donor registration

15 Nov 2020
2.3
### ADDED
- Dashboard Feature
### FIX
- Inactive loading state after login

6 Oct 2020
2.2.6
### FIX
- Basic data of donor while Reregistration not change

6 Aug 2020
2.2.5
### ADD
- bg image on registration and admin login
- logo on registration page

5 Aug 2020
2.2.4
### ADD
- Loading state & error notification
- add h-100 on card in homepage

### IMPROVE
- selecting necessary data for query donor index, blog index

3 Aug 2020
2.2.3 hotfix 1
### IMPROVE
- Compress image in 2.2.3

2.2.3 hot
### ADDED
- Image in header blogs and Team
- image in about Us
2.2.2
### ADDED
- empty state on awardee request
- empty state on donation transaction
### FIXED
- duration period algoritm

3 Aug 2020
2.2.1 hotfix 1

### FIXED
- awardee scholarship index

2.2.1

### FIXED
- permission logic in broadcast reinvitation to donor

2.2.0

### NEW FEATURES
- Broadcast for sending reinvitaton to donor
- Broadcast system for sending message
- Old registered donor can re register for new period
- Mode for Passive Donor Only category available in settings
- Toggle Open/close registration available in settings
- Redirection URL system (UI not provided, but system is already)

### IMRPROVEMENTS
- MONTH and YEAR per period can be applied in system (UI not yet provided but system is already)


### NOTES during development
###ADDED
- Add new column re-register token in donor
- column status in table broadcast_reader
- column broadcst_type_id in table broadcast
- broadcast_type for consider groups (awardee, scholarship, donors)
- add data for broadcast_type
- add table for DonorRegistration
- Start / End for Month / Year period in table Generals (consider to be deprecated)
- column start_month & end_month in period table
- column is_open_registration in scholarship table
- row 'form donor open' and 'form donor passive mode'  in general table
###CHANGE
- Period data type in broadcast to INT instead YEAR
###REMOVED
- accountable_type in table broadcast


06-1-2020
### ADDED
- Role & Permission
- Assign role to element
- Blog system
- New Main Website (Home Page, Blog, Team Member)
- New Blog system
- New Settings Menu
- Assign Ordering for Department and role
- Add Active and featured Admin
- Assigning queue process for send email after admin registration
- Add new Column department_id in table roles
- Add new Column status in blogs
- Add new Column order in department
- Add summary to blogs for meta description
- Add Column Status and Featured for admin
### Revised
- Table Name to Admin Permission and Row name to admin_id
- Table Name admmin_permission to permission_role and Column admin_id to role_id



12-12-2019
### IMPROVE
- Popup Notification
- UI Layout for title page
- Back button placement

### Revised
- Code for Table Component due to updating bootstrap vue

28-11-2019
### IMPROVE
- Better Summary Index in donor page
- Better Summary Index in transaction history page

27-11-2019
### ADDED
- Forgot Password Feature
- Send Notification after register new admin
- sort by PCO & PR


24-05-2019
### ADDED
- Instagram Link on Reminder Donation

28-04-2019
### FIXED
- Action for edit in donor transaction not work properly
### CHANGE
- Subject Email for Payment receipt donation
- bcc on email

06-04-2019
### FIXED
- Evidence attachment for donation in table not updating
- index number in list donation not updating


27-03-2019

### ADDED
- Modal confirmation before deleting evidence

### FIXED
- auto rename evidence from confirmation donation by system

22-03-2019

### ADDED
- Function edit User Donors database
- Function for resend confirmation email
- input year (angkatan) for admin
- edit year for admin in admin detail
- validation input evidence transacion history in admin panel

### FIXED
- Fixed name of head finance in "bukti penerimaan donasi"
- Naming for evidence (extention fixed)

15-03-2019

### FIXED
- Pagination Donors index

11-03-2019

### CHANGE
- Change email name to SEED scholarship
- Remove "12 bulan" in contract donors

10-03-2019

### ADDED
- Zip Code in form registration donors (with validation input)

01-03-2019

### ADDED
- Assign PR Officer to donor
- New Page for transactions for all Donor per period
- Add plan to date in table donor
- new column for PR to Donor table

### CHANGED
- Automatically generated evidence title with series incremented
- Reminder to donor change to 10.00
- Reminder to Donor with condition must AGREED contract
- period change to MARCH - DECEMBER
- commented information total donation per year in contract donor
- switch button "send paymnent receit" and "delete" in transactions history

### FIXED
- Table for all transactions (not paginate)
- input validation for file upload awardee & awardee_nonreg
- input validation for file upload confirmation donor

26-03-2019

### ADDED
- condition where not AGREED to registercontroller for donors
- column is_active in periods
- assign PCO to donor
- awardee_period table to database
- Task Scheduling for reminder donation
- Template email for reminder donation
- page & controller for reminder donation
- new table design for list donors

### CHANGED
- Rewrite model relationship for awardee to period and awardee_nonreg to scholarship
- column donation_token in database
- column first_name to initial in admin
- table donor_period to donor_period
- column last_name to year in admins table
- datatype amount in donor period to float
- edit datatype amount in donor transactions to float
- change column name in table donor, awardee, awardee_nonreg from awardee_department to college_department
- awardee_department to college_department
- move college_department to folder common
- DonorInvoice to DonorPaymentReceipt for email template name
- SendInvoice to SendPaymentReceipt for nofification email



