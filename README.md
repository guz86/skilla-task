# SPA

This React-based application provides a streamlined interface for managing call history, leveraging data fetched from an API. Key features include:
Date-based filtering: Easily select and view call records within a specific date range using the integrated date picker.
Call type filtering: Filter calls by type, displaying only incoming, outgoing, or all calls.
Audio playback: Play audio recordings of calls directly within the app, if available.
Sorting options: Sort call history by date and duration for more efficient navigation and review.
The app is deployed on Vercel for easy access and showcases a responsive, user-friendly design with real-time data interaction.
 
Deploy: [https://skilla-task-phi.vercel.app/](https://skilla-task-phi.vercel.app/)

## Author

- [Pavel Gordienko](https://github.com/guz86)

## Setup and Running

- Use `node 21.x` or higher.
- Clone this repo: `$ git clone https://github.com/guz86/skilla-task.git`.
- Go to downloaded folder: `$ cd app`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm run dev`.
- Now you can see web application to the address: `http://localhost:5174/app/`.

### Build

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
npm run dev
```

## Stack
- React
- Typescript
- Vite

## API
- [https://api.skilla.ru/testapi](https://api.skilla.ru/testapi)

## Folder structure

- Components - components of application.
- Utils - helper utilities, functions, and classes that can be used in different parts of your application.
- Pages - components that represent individual pages.

## Screenshots
![image](https://github.com/user-attachments/assets/2c6b690f-b1dc-4b14-97d0-73e57601f4dc)
![image](https://github.com/user-attachments/assets/00b48fc3-c6dc-4b83-bccb-a5b9a3a4a9d6)
![image](https://github.com/user-attachments/assets/bb9adac6-b383-4498-8552-ed69464af4e0)



## Task

![image](https://github.com/user-attachments/assets/e113e2b9-afe0-46b4-b63a-e92e3e26659f)

Требуется взять из фигмы проект и разработать функционал по заданию на React. Данные можно взять с бека по API отсюда https://api.skilla.ru/testapi. Тестовый токен — testtoken.  
Функционал, которую необходимо разработать: 
- отображение списка звонков с выборкой по датам (date picker); 
- фильтрация звонков по типу: входящие, исходящие или все звонки;
- проигрывание записи (если есть);
- сортировка по дате и продолжительности через API.
 
Готовое ТЗ залить на GitHub и развернуть проект на Vercel или аналог.  
