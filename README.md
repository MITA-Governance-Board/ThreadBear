# ThreadBear

ThreadBear is an open-source tool that tests Medicaid IT modules for security, performance, and conformance to Poplin APIs.

# Technical Architecture

ThreadBear is a Ruby on Rails application with a React frontend. Wherever possible, ThreadBear attempts to conform to rails conventions.

# Installation

1. Download and install prerequisites:
  * [Ruby Version Manager](https://rvm.io/)
  * Ruby 2.5.1 (use rvm)
  * [Node Package Manager](https://www.npmjs.com/)
2. Clone this repository
3. Install node dependencies
  * `cd /frontend`
  * `npm install`
4. Install ruby and rails dependencies
  * `cd ..`
  * `gem install bundler`
  * `bundle install`
5. Start the servers using `rake start`
  * Rails will start on http://localhost:3001
  * React will start on http://localhost:3000

# Unit Tests

TODO

# MITRE
[MITRE](https://www.mitre.org/) is a not-for-profit company that operates Federally Funded Research and Development Centers (FFRDC).

ThreadBear was initiated as part of the [CMS Alliance to Modernize Healthcare](https://www.mitre.org/centers/cms-alliances-to-modernize-healthcare/who-we-are) (CAMH) and strives to accelerate the [IHI's Triple AIM](http://www.ihi.org/Engage/Initiatives/TripleAim/Pages/default.aspx) of improved patient care, better population health, and reduced per capita cost in the United States healthcare system.
