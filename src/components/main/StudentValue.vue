<template>
  <div class="w-100" id="section">
    <h2 id="section-title">Want your dream job?</h2>
    <div class="mt-4 mb-4 subsection">
      <img src="@/assets/pexels-freestocksorg-122477.jpg" class="feature-img"/>
      <div class="my-auto right-text feature-text">
        <h3 class="subsection-title">Skip The Line</h3>
        <p>
          Typical job posting for FANG companies get over 500 applicants.
          How will you standout out of 100s of engineers? You can, by getting referred by
          veteran from the company.
        </p>
      </div>
    </div>
    <div class="subsection mb-4">
      <div class="my-auto left-text feature-text">
        <h3 class="subsection-title">Review Your Skills</h3>
        <p>
          You need to pass the interview to get the job. What better way to
          practice interviewing than with the person who passed the interview.
        </p>
      </div>
      <img src="@/assets/pexels-fauxels-3184460.jpg" class="feature-img"/>
    </div>
    <div class="subsection mb-4">
      <img src="@/assets/pexels-ketut-subiyanto-4560150.jpg" class="feature-img"/>
      <div class="my-auto right-text feature-text">
        <h3 class="subsection-title">Stack Your Resume</h3>
        <p>
          Within the first two session, referrer would let you know whether you would be qualified for referral.
          If you aren't, we can help stack your resume by working together on a open source project together
          setting you up for success next time around.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
#section{
  padding-top: 6rem;
}

#section-title {
  margin-bottom: 1rem;
  color: var(--clr-gray-2);
  text-align: center;
}

.subsection-title{
  color: var(--clr-gray-3);
}

.subsection{
  max-width: 100%;
  height: 30rem;
  display:flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.feature-img{
  max-width: 50%;
  object-fit: cover;
}

.feature-text{
  max-width: 25rem;
  width: 50%;
}

.right-text{
  padding-left: 1rem;
  text-align: left;
}

.left-text{
  padding-right: 1rem;
  text-align: right;
}


@media (max-width: 800px) {
  .feature-img{
    max-height: 70%;
    max-width: 100%;
    object-fit: cover;
  }

  .subsection{
    max-width: 100%;
    height: 35rem;
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  .left-text{
    padding-right: 0;
    text-align: center;
    order: 5;
  }

  .right-text{
    padding-left: 0;
    text-align: center;
  }

  .feature-text{
    max-width: 25rem;
    width: 75%;
  }
}
</style>
