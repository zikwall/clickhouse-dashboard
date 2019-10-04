# ClickHouse Statistic Dashboard

A client application written in React for managers of statistics and analytics, as well as for administrators of the Yandex ClickHouse database

![Main image](./screenshots/main.png "Main Image")

- [x] Nice and convenient application structure and routing
    - [x] Layouts
    - [x] SubLayouts  
    - [x] Pages
        - [x] Local components
    - [x] Components
        - [x] Quickstart
            - [x] UI/UX (Bootstrap) components
            - [x] Error Boundaries
            - [x] Content Loaders/Preloaders
        - [x] and more
    - [x] Containers
    - [x] Utilities
- [x] Flexible system of authentication, authorization and separation of user rights based on roles and permissions
    - [x] JWT auntification
    - [x] Base Form (FormBased) authorization
    - [ ] OAuth 2.0
    - [x] RBAC
    - [ ] Various user session repositories
- [x] Chart.js 
- [ ] Creating [tabbix](https://tabix.io)-like functionality

## Install & Run

1. `git clone https://github.com/zikwall/clickhouse-dashboard`
2. `cd /clickhouse-dashboard`
3. `npm install`
4. `npm start`

### Nginx

1. `npm build`

```bash

server {
  listen 82;
  server_name clickhouse-dashboard.local;
  root /path/to/clickhouse-dashboard/build;
  index index.html;
  
  access_log /var/log/nginx/clikhouse-dashboard.access.log;
  error_log /var/log/nginx/clikhouse-dashboard.error.log;
  location / {
    try_files $uri /index.html =404;
  }
}

```