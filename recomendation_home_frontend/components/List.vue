<template>
    <div>
        <!--Page Title-->
        <section class="page-title">
        <div class="auto-container">
            <div class="title-outer">
            <h1>Top UX Designers in Birmingham</h1>
            <ul class="page-breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li>Jobs</li>
            </ul>
            </div>
        </div>
        </section>
        <!--End Page Title-->

        <div class="container">
            <div class="mt-4 mb-4">    
                <p>Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.</p>
            </div>
        </div>

            <!-- Listing Section -->
    <section class="ls-section">
      <div class="auto-container">
        <div class="filters-backdrop"></div>

        <div class="row">
          <!-- Filters Column -->
          <div class="filters-column hide-left">
            <div class="inner-column">
              <div class="filters-outer">
                <button type="button" class="theme-btn close-filters">X</button>

                <!-- Filter Block -->
                <div class="filter-block">
                  <h4>Search by Keywords</h4>
                  <div class="form-group">
                    <input type="text" name="listing-search" placeholder="Job title, keywords, or company">
                    <span class="icon flaticon-search-3"></span>
                  </div>
                </div>

                <!-- Filter Block -->
                <div class="filter-block">
                  <h4>Location</h4>
                  <div class="form-group">
                    <input type="text" name="listing-search" placeholder="City or postcode">
                    <span class="icon flaticon-map-locator"></span>
                  </div>
                  <p>Radius around selected destination</p>
                  <div class="range-slider-one">
                    <div class="area-range-slider"></div>
                    <div class="input-outer">
                      <div class="amount-outer"><span class="area-amount"></span>km</div>
                    </div>
                  </div>
                </div>

                <!-- Filter Block -->
                <div class="filter-block">
                  <h4>Category</h4>
                  <div class="form-group">
                    <select class="chosen-select">
                      <option>Choose a category</option>
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                      <option>Apartments</option>
                    </select>
                    <span class="icon flaticon-briefcase"></span>
                  </div>
                </div>

                <!-- Switchbox Outer -->
                <div class="switchbox-outer">
                  <h4>Job type</h4>
                  <ul class="switchbox">
                    <li>
                      <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                        <span class="title">Freelance</span>
                      </label>
                    </li>
                    <li>
                      <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                        <span class="title">Full Time</span>
                      </label>
                    </li>
                    <li>
                      <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                        <span class="title">Internship</span>
                      </label>
                    </li>
                    <li>
                      <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                        <span class="title">Part Time</span>
                      </label>
                    </li>
                    <li>
                      <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                        <span class="title">Temporary</span>
                      </label>
                    </li>
                  </ul>
                </div>

                <!-- Checkboxes Ouer -->
                <div class="checkbox-outer">
                  <h4>Date Posted</h4>
                  <ul class="checkboxes">
                    <li>
                      <input id="check-f" type="checkbox" name="check">
                      <label for="check-f">All</label>
                    </li>
                    <li>
                      <input id="check-a" type="checkbox" name="check">
                      <label for="check-a">Last Hour</label>
                    </li>
                    <li>
                      <input id="check-b" type="checkbox" name="check">
                      <label for="check-b">Last 24 Hours</label>
                    </li>
                    <li>
                      <input id="check-c" type="checkbox" name="check">
                      <label for="check-c">Last 7 Days</label>
                    </li>
                    <li>
                      <input id="check-d" type="checkbox" name="check">
                      <label for="check-d">Last 14 Days</label>
                    </li>
                    <li>
                      <input id="check-e" type="checkbox" name="check">
                      <label for="check-e">Last 30 Days</label>
                    </li>
                  </ul>
                </div>

                <!-- Checkboxes Ouer -->
                <div class="checkbox-outer">
                  <h4>Experience Level</h4>
                  <ul class="checkboxes square">
                    <li>
                      <input id="check-ba" type="checkbox" name="check">
                      <label for="check-ba">All</label>
                    </li>
                    <li>
                      <input id="check-bb" type="checkbox" name="check">
                      <label for="check-bb">Internship</label>
                    </li>
                    <li>
                      <input id="check-bc" type="checkbox" name="check">
                      <label for="check-bc">Entry level</label>
                    </li>
                    <li>
                      <input id="check-bd" type="checkbox" name="check">
                      <label for="check-bd">Associate</label>
                    </li>
                    <li>
                      <input id="check-be" type="checkbox" name="check">
                      <label for="check-be">Mid-Senior level4</label>
                    </li>
                    <li>
                      <button class="view-more"><span class="icon flaticon-plus"></span> View More</button>
                    </li>
                  </ul>
                </div>

                <!-- Filter Block -->
                <div class="filter-block">
                  <h4>Salary</h4>

                  <div class="range-slider-one salary-range">
                    <div class="salary-range-slider"></div>
                    <div class="input-outer">
                      <div class="amount-outer">
                        <span class="amount salary-amount">
                          $<span class="min">0</span>
                          $<span class="max">0</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Filter Block -->
                <div class="filter-block">
                  <h4>Tags</h4>
                  <ul class="tags-style-one">
                    <li><a href="#">app</a></li>
                    <li><a href="#">administrative</a></li>
                    <li><a href="#">android</a></li>
                    <li><a href="#">wordpress</a></li>
                    <li><a href="#">design</a></li>
                    <li><a href="#">react</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Content Column -->
          <div class="content-column col-lg-12">
            <div class="ls-outer">
              <!-- ls Switcher -->
              <div class="ls-switcher">
                <div class="showing-result show-filters">
                  <button type="button" class="theme-btn toggle-filters"><span class="icon icon-filter"></span> Filter</button>
                  <div class="text">Showing <strong>41-60</strong> of <strong>944</strong> jobs</div>
                </div>
                <div class="sort-by">
                  <select class="chosen-select">
                    <option>New Jobs</option>
                    <option>Freelance</option>
                    <option>Full Time</option>
                    <option>Internship</option>
                    <option>Part Time</option>
                    <option>Temporary</option>
                  </select>

                  <select class="chosen-select">
                    <option>Show 10</option>
                    <option>Show 20</option>
                    <option>Show 30</option>
                    <option>Show 40</option>
                    <option>Show 50</option>
                    <option>Show 60</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-1.png" alt=""></span>
                      <h4><a href="#">Software Engineer (Android), Libraries</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-2.png" alt=""></span>
                      <h4><a href="#">Recruiting Coordinator</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-3.png" alt=""></span>
                      <h4><a href="#">Product Manager, Studio</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-4.png" alt=""></span>
                      <h4><a href="#">Senior Product Designer</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-5.png" alt=""></span>
                      <h4><a href="#">Senior Full Stack Engineer, Creator Success</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-6.png" alt=""></span>
                      <h4><a href="#">Software Engineer (Android), Libraries</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-7.png" alt=""></span>
                      <h4><a href="#">Software Engineer (Android), Libraries</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-8.png" alt=""></span>
                      <h4><a href="#">Recruiting Coordinator</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-9.png" alt=""></span>
                      <h4><a href="#">Product Manager, Studio</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-1.png" alt=""></span>
                      <h4><a href="#">Senior Product Designer</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-1.png" alt=""></span>
                      <h4><a href="#">Software Engineer (Android), Libraries</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-2.png" alt=""></span>
                      <h4><a href="#">Recruiting Coordinator</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-3.png" alt=""></span>
                      <h4><a href="#">Product Manager, Studio</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-4.png" alt=""></span>
                      <h4><a href="#">Senior Product Designer</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-5.png" alt=""></span>
                      <h4><a href="#">Senior Full Stack Engineer, Creator Success</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>

                <!-- Job Block -->
                <div class="job-block col-lg-12 col-md-12 col-sm-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-6.png" alt=""></span>
                      <h4><a href="#">Software Engineer (Android), Libraries</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                      <ul class="job-other-info">
                        <li class="time">Full Time</li>
                        <li class="privacy">Private</li>
                        <li class="required">Urgent</li>
                      </ul>
                      <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pagination -->
              <nav class="ls-pagination mb-5">
                <ul>
                  <li class="prev"><a href="#"><i class="fa fa-arrow-left"></i></a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#" class="current-page">2</a></li>
                  <li><a href="#">3</a></li>
                  <li class="next"><a href="#"><i class="fa fa-arrow-right"></i></a></li>
                </ul>
              </nav>

              <!-- Call To Action -->
              <div class="call-to-action-four style-two">
                <h5>Recruiting?</h5>
                <p>Advertise your jobs to millions of monthly users and search 15.8 million <br>CVs in our database.</p>
                <a href="#" class="theme-btn btn-style-one bg-blue"><span class="btn-title">Start Recruiting Now</span></a>
                <div class="image" style="background-image: url(images/resource/ads-bg-4.png);"></div>
              </div>
              <!-- End Call To Action -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Listing Page Section -->

    </div>
</template>

<script setup>

</script>

<style scoped>

</style>