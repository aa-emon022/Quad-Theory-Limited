This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

--> I used tailwind for responsiveness. I have modified the Responsive to make it responsive because the phone device of the phone can be different like iPhone 4 320px or other phone 550px then many issues of responsive why I made a custom screen with 320 480 600 like this

## Here it is asked to show data by fetching data from API?
 There are two sliders but first, you have to show different data in the slider. Here is how I solved the problem.?

- The IDs of the first data to be shown have been kept in a variable. The data coming from the API is kept in the variable. Filtering (filter method)  After filtering I checked whether I have these data through includes().
- Then I gave sort(). As if the data that I want to show first for all the data
  
- I have shown five data here. It is created by me through pagination without using any package

Here when I fetched the data from the API, I placed the data in a global variable created using the usecontext().. As a result, we got rid of Prop Drilling.
## When I am deploying the project to the server the data is not coming from the API so I have given a screenshot of how I am creating the slider.
![App Screenshot](https://ibb.co/7K2Hx5F)
