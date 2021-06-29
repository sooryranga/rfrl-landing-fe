<template>
  <div class="row w-100" id="section">
    <h2 id="section-title">Want your dream job?</h2>
    <div class="row mt-4 mb-4">
      <div class="col">
        <img src="@/assets/pexels-freestocksorg-122477.jpg" class="feature-img"/>
      </div>
      <div class="col">
        <div class="subsection flex-container">
          <div class="my-auto">
            <h3 class="subsection-title">Skip the line</h3>
            <p class="subsection-description">
              Typical job posting for FANG companies get over 500 applicants.
              How will you standout out of 100s of engineers? You can, by getting referred by
              veteran from the company.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <div class="subsection flex-container">
          <div class="my-auto">
            <h3 class="subsection-title">Review your skills</h3>
            <p class="subsection-description">
              You need to pass the interview to get the job. What better way to
              practice interviewing than with the person who passed the interview.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <img src="@/assets/pexels-fauxels-3184460.jpg" class="feature-img"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img src="@/assets/pexels-ketut-subiyanto-4560150.jpg" class="feature-img"/>
      </div>
      <div class="col">
        <div class="subsection flex-container">
          <div class="my-auto">
            <h3 class="subsection-title">Stack your resume</h3>
            <p class="subsection-description">
              Within the first two session, referrer would let you know whether you would be qualified for referral.
              If you aren't, we can help stack your resume by working together on a open source project together
              setting you up for success next time around.
            </p>
          </div>
        </div>
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
  color: var(--clr-gray-1);
  text-align: center;
}

.subsection-title{
  color: var(--clr-gray-3);
}

.subsection-description{
  max-width: 50ch;
}

.subsection{
  min-height: 20rem;
}

.feature-img{
  width: 100%;
}
</style>
