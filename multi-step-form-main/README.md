# Frontend Mentor - Multi-step form

![Design preview for the Multi-step form coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a good understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this multi-step form and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design.

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`.

If you would like the design files (we provide Sketch & Figma versions) to inspect the design in more detail, you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

All the required assets for this project are in the `/assets` folder. The images are already exported for the correct screen size and optimized.

We also include variable and static font files for the required fonts for this project. You can choose to either link to Google Fonts or use the local font files to host the fonts yourself. Note that we've removed the static font files for the font weights that aren't needed for this project.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommended hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Create a custom `README.md`

We strongly recommend overwriting this `README.md` with a custom one. We've provided a template inside the [`README-template.md`](./README-template.md) file in this starter code.

The template provides a guide for what to add. A custom `README` will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the `README-template.md` file to `README.md`. That will make it show up as your repository's README file.

## Submitting your solution

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of the [community](https://www.frontendmentor.io/community).
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback.

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

## Got feedback for us?

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀

<!--  <body class="bg-light d-flex justify-content-center align-items-center">
    <div
      class="loginForm rounded-2 position-relative d-flex flex-column flex-md-row"
    >
      <!-- Sidebar start -->

      <div
        class="sidebar position-relative w-100 d-flex flex-row flex-md-column gap-4 pt-5 p-4"
      >
        <div class="step d-flex gap-3 active">
          <div class="step--num-container rounded-circle border-white border">
            <h5 class="step--num">1</h5>
          </div>
          <div class="step-info">
            <span class="step--Text text-uppercase text-white-50">Step 1</span>
            <p class="text-uppercase text-white">your info</p>
          </div>
        </div>
        <div class="step d-flex gap-3">
          <div class="step--num-container rounded-circle border-white border">
            <h5 class="step--num">2</h5>
          </div>
          <div class="step-info">
            <span class="step--Text text-uppercase text-white-50">Step 2</span>
            <p class="text-uppercase text-white">Select plan</p>
          </div>
        </div>
        <div class="step d-flex gap-3">
          <div class="step--num-container rounded-circle border-white border">
            <h5 class="step--num">3</h5>
          </div>
          <div class="step-info">
            <span class="step--Text text-uppercase text-white-50">Step 3</span>
            <p class="text-uppercase text-white">add-ons</p>
          </div>
        </div>
        <div class="step d-flex gap-3">
          <div class="step--num-container rounded-circle border-white border">
            <h5 class="step--num">4</h5>
          </div>
          <div class="step-info">
            <span class="step--Text text-uppercase text-white-50">Step 4</span>
            <p class="text-uppercase text-white">Summary</p>
          </div>
        </div>
      </div>
      <!-- Sidebar end -->
      <div class="steps">
        <!-- Step 1 start -->
        <div class="step-one h-100 d-flex flex-column position-relative">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          <form action="" class="d-flex flex-column">
            <div class="userInputs d-flex flex-column mt-3">
              <label for="name">Name</label>
              <input
                type="text"
                placeholder="e.g. Stephen King"
                class="mb-4 mt-2 rounded-3 userData"
              />
              <label for="Email">Email Address</label>
              <input
                class="mb-4 mt-2 rounded-3 userData"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
              />
              <label for="phone"> Phone Number </label>
              <input
                class="mb-4 mt-2 rounded-3 userData"
                type="tel"
                placeholder="e.g. +1 234 567 890 Next"
              />
            </div>
          </form>
          <button class="nextStep btn btn-primary position-absolute">
            Next Step
          </button>
        </div>
        <!-- Step 5 end -->
      </div>
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>

  </body> -->
