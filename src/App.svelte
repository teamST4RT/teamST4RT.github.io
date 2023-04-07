<script lang="ts">
    import { Router, Route, Link } from "svelte-navigator";
    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";
    import Members from "./routes/Members.svelte";
    import TransitionContainer from "./components/TransitionContainer.svelte";
    import RouteTransition from "./components/RouteTransition.svelte";
    import ColorSwitcher from "./components/ColorSwitcher.svelte";
    let profile = "./images/profile.svg";
    let about = "./images/info.png";
    let mail = "./images/mail.svg";
    let st4rt = "./images/st4rt.png";
</script>

<Router primary={false}>
    <div class="container">
        <div class="header">
            <div class="intro">
                <Link to="/"><h1>ST4RT</h1></Link>
                <p id="slogan">from bottom, we are</p>
            </div>
        </div>
        
        <div class="contents">
            <div class="navigator">
                <div class="nav-btn">
                    <ColorSwitcher />
                </div>
                <div class="nav-btn">
                    <Link to="/about"><img src={about} alt="about" /></Link>
                </div>
                <div class="nav-btn">
                    <Link to="/members"><img src={profile} alt="profile" /></Link>
                </div>
            </div>
            <div class="transition">
                <TransitionContainer>
                    <Route path="/">
                        <RouteTransition>
                            <Home />
                        </RouteTransition>
                    </Route>
                    <Route path="about">
                        <RouteTransition>
                            <About />
                        </RouteTransition>
                    </Route>
                    <Route path="members">
                        <RouteTransition>
                            <Members />
                        </RouteTransition>
                    </Route>
                </TransitionContainer>
                <div class="footer">
                    <div class="left-footer">
                        <span id="st4rt">ST4RT</span>
                        <span>, since 2021.04</span>
                        <p>Contact</p>
                        <div class="box">
                            <p>
                                <a
                                    href="mailto:team.st4rt@gmail.com"
                                    title="mail"
                                    target="_blank">team.st4rt@gmail.com</a
                                >
                            </p>
                            <p>
                                <a
                                    href="https://www.facebook.com/teamst4rt"
                                    target="_blank">facebook.com/teamst4rt</a
                                >
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Router>

<style lang="scss">
    @import "./stylesheets/App.scss";
</style>