from flask import Flask, render_template, jsonify, request
# from newsapi import NewsApiClient

app = Flask(__name__)
# newsapi = NewsApiClient(api_key='a7ce5af704c4493584f1068248f3b540')


@app.route('/')
def home():
    articles = [fetch_articles(' ')]
    return render_template('testCombo.html', articles=articles)


def fetch_articles(domain):
    if domain not in ['techcrunch', 'engadget', 'gizmodo']:
        return []

    # articles = newsapi.get_everything(
    #    domains=domain + '.com',
    #    language='en',
    #    sort_by='relevancy',
    #    page_size=12
    # )

    if domain == 'techcrunch':
        articles = [
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Jagmeet Singh",
                "title": "Twitter Blue relaunched has made just $11M on mobile in its first 3 months",
                "description": "Twitter Blue has helped the microblogging network generate around $11 million globally from mobile users since its relaunch in December.",
                "url": "https://techcrunch.com/2023/03/24/twitter-blue-subscriptions-spendings-mobile-users/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/twitter-blue-breaking.jpg?resize=1200,645",
                "publishedAt": "2023-03-24T18:58:30Z",
                "content": "Legacy Twitter checkmarks are disappearing on April 1st, Twitter says, and in the future, the only way users will be able to get the coveted blue badge is by paying for a Twitter Blue subscription. T… [+5693 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Devin Coldewey",
                "title": "Framework refines its laptops and adds a cute way to reuse old parts",
                "description": "Framework just showed off some new models, but also a neat case that you can slot old parts into to form a new (ish) desktop PC.",
                "url": "https://techcrunch.com/2023/03/24/framework-refines-its-laptops-and-adds-a-cute-way-to-reuse-old-parts/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/cooler-master-mainboard-case-02.jpg?resize=1200,847",
                "publishedAt": "2023-03-24T17:56:12Z",
                "content": "Framework is one of a few companies leading the charge against disposable electronics, in particular laptops. It just showed off some new models, but also a unique case that you can slot your old par… [+1511 chars]"
            },

            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Natasha Lomas",
                "title": "French parliament votes for biometric surveillance at Paris Olympics",
                "description": "European Union lawmakers are on track to ban the use of remote biometric surveillance for general law enforcement purposes. However that hasn't stopped parliamentarians in France voting to deploy AI to monitor public spaces for suspicious behavior during the …",
                "url": "https://techcrunch.com/2023/03/24/paris-olympics-biometrics-surveillance/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/CCTV-e1658222063593.jpg?resize=1200,674",
                "publishedAt": "2023-03-24T17:15:09Z",
                "content": "European Union lawmakers are on track to ban the use of remote biometric surveillance for general law enforcement purposes. However that hasn’t stopped parliamentarians in France voting to deploy AI … [+4345 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Christine Hall",
                "title": "Daily Crunch: New Twitter Blue feature will reportedly squelch 50% of ads for paid members",
                "description": "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
                "url": "https://techcrunch.com/2023/04/06/daily-crunch-new-twitter-blue-feature-will-reportedly-squelch-50-of-ads-for-paid-members/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/twitter-verified.jpg?resize=1200,813",
                "publishedAt": "2023-04-06T22:06:16Z",
                "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT, subscribe here.\r\nWell, hello there! Haje is getting a head start on the weekend, so… [+3962 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Kyle Wiggers",
                "title": "Anthropic's $5B, 4-year plan to take on OpenAI",
                "description": "AI research startup Anthropic aims to raise as much as $5 billion over the next two years to take on rival OpenAI.",
                "url": "https://techcrunch.com/2023/04/06/anthropics-5b-4-year-plan-to-take-on-openai/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/04/anthropic-header.jpg?resize=1200,540",
                "publishedAt": "2023-04-06T21:25:20Z",
                "content": "AI research startup Anthropic aims to raise as much as $5 billion over the next two years to take on rival OpenAI and enter over a dozen major industries, according to company documents obtained by T… [+4406 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Aisha Malik",
                "title": "T-Mobile to provide free MLB.TV subscriptions to customers through 2028",
                "description": "T-Mobile announced today that it has extended its partnership with Major League Baseball to allow its customers to continue receiving free MLB.TV subscriptions through 2028. An MLB.TV subscription typically cost $150 per year. The extended partnership comes a…",
                "url": "https://techcrunch.com/2023/04/06/t-mobile-to-provide-free-mlb-tv-subscriptions-to-customers-through-2028/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/04/Screenshot-2023-04-06-at-5.01.49-PM.png?resize=1200,722",
                "publishedAt": "2023-04-06T21:06:11Z",
                "content": "T-Mobile announced today that it has extended its partnership with Major League Baseball to allow its customers to continue receiving free MLB.TV subscriptions through 2028. An MLB.TV subscription ty… [+1522 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Natasha Mascarenhas",
                "title": "Our favorite startups from YC’s Winter 2023 Demo Day — Part 2",
                "description": "Is crypto back? What happened to the accountant tech stack? And are we ready to start talking about cloud marketplaces? Read on.",
                "url": "https://techcrunch.com/2023/04/06/y-combinator-demo-day-2023-favorites-part-two/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/04/yc-ocean.jpg?resize=1200,645",
                "publishedAt": "2023-04-06T20:24:33Z",
                "content": "Over 20,000 applications flew into Y Combinator, which ended up plucking out 282 startups for its latest batch. And now were getting our first look at them through Demo Day.\r\nThe first days demos inc… [+743 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Harri Weber",
                "title": "Apple (re)invents the iPod",
                "description": "Apple has devised a pocket-sized companion that (hypothetically) does it all: music, videos AND books, sans the nagging smartphone or clumsy smartwatch. Cupertino, you’re so close. In a patent application published recently by the U.S. Patent Office, Apple sk…",
                "url": "https://techcrunch.com/2023/04/06/apple-reinvents-ipod-airpods-case-patent/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/04/ipod.jpg?resize=1200,933",
                "publishedAt": "2023-04-06T19:59:16Z",
                "content": "Apple has devised a pocket-sized companion that (hypothetically) does it all: music, videos AND books, sans the nagging smartphone or clumsy smartwatch. Cupertino, you’re so close.\r\nIn a patent appli… [+1554 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Patrick George",
                "title": "The Kia EV9's real killer app could be its software",
                "description": "The Kia EV9's most important feature flew under the radar during its debut at the 2023 New York International Auto Show.",
                "url": "https://techcrunch.com/2023/04/06/the-kia-ev9s-real-killer-app-could-be-its-software/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/04/20065_2024_EV9.jpeg?resize=1200,797",
                "publishedAt": "2023-04-06T19:39:51Z",
                "content": "When car companies use the term “flagship,” traditionally that means a high-end supercar or a plush luxury sedan. But the all-new 2024 Kia EV9 is a flagship of a different kind.\r\nIt’s a crossover, fo… [+5805 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Devin Coldewey",
                "title": "Can AI commit libel? We're about to find out",
                "description": "Can an AI model like ChatGPT even commit libel? No one knows - but with a few upcoming legal cases, we may find out.",
                "url": "https://techcrunch.com/2023/04/06/can-ai-commit-libel-were-about-to-find-out/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/02/GettyImages-717158095.jpg?resize=1200,847",
                "publishedAt": "2023-04-06T19:26:46Z",
                "content": "The tech world’s hottest new toy may find itself in legal hot water as AI’s tendency to invent news articles and events comes up against defamation laws. Can an AI model like ChatGPT even commit libe… [+5031 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Jacquelyn Melinek",
                "title": "Can Arbitrum’s recently formed DAO recover from its messy week?",
                "description": "Can Arbitrum’s recently formed DAO recover from its messy week?techcrunch.com",
                "url": "https://techcrunch.com/2023/04/06/to-dao-or-not-to-dao/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/04/dao-hands-red-dollar-coin.jpg?resize=1200,768",
                "publishedAt": "2023-04-06T19:01:13Z",
                "content": "The TechCrunch Podcast Network has been nominated for two Webbys in the Best Technology Podcast category. You can help TechCrunch win by voting for Chain Reaction, which digs into the wild world of c… [+6755 chars]"
            },
            {
                "source": {
                    "id": "the-next-web",
                    "name": "The Next Web"
                },
                "author": "Thomas Macaulay",
                "title": "Mammoth meatball beef exposes foodtech’s patent problem",
                "description": "A bitter feud has erupted over who first resurrected the woolly mammoth — as a meatball. The de-extinct delicacy was unveiled last week at Nemo Science Museum in the Netherlands. Naturally, no mammoths were harmed in the making of the product. In lieu of dead…",
                "url": "https://thenextweb.com/news/paleo-accuses-vow-of-copying-mammoth-meatball-invention",
                "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F04%2FUntitled-design.jpg&signature=8b0a4191ff0a7bbc701af450a34c1e90",
                "publishedAt": "2023-04-06T18:39:07Z",
                "content": "A bitter feud has erupted over who first resurrected the woolly mammoth as a meatball.\r\nThe de-extinct delicacy was unveiled last week at Nemo Science Museum in the Netherlands. Naturally, no mammoth… [+5087 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Brian Heater",
                "title": "The robots are already here",
                "description": "The robots are already here. Actuator: What’s this ‘general purpose’ stuff I keep hearing about? Also, research robots.",
                "url": "https://techcrunch.com/2023/04/06/the-robots-are-already-here/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/04/Crawler_2-1.png?w=800",
                "publishedAt": "2023-04-06T18:31:12Z",
                "content": "In a blog post published last week, Meta asks, Where are the robots? The answer is simple. Theyre here. You just need to know where to look. Its a frustrating answer. I recognize that. Lets set aside… [+11481 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Zack Whittaker",
                "title": "Throne fixes security bug that exposed creators' private home addresses",
                "description": "A recently fixed security bug at a popular platform for supporting creators shows how even privacy-focused platforms can put creators' private information at...",
                "url": "https://techcrunch.com/2023/04/06/throne-security-bug-creators-address/",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/wmYxFlkKoYjJ8aRj2YHGIw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/techcrunch_350/6cba75b126e48a8df3bb2c6a00a0f315",
                "publishedAt": "2023-04-06T18:23:34Z",
                "content": "A recently fixed security bug at a popular platform for supporting creators shows how even privacy-focused platforms can put creators' private information at risk.\r\nThrone, founded in 2021, bills its… [+4788 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Lauren Simonds",
                "title": "Level up with our partners at TC Early Stage",
                "description": "Boston! Are you ready for some green on 4/20? No, not that green. It’s TechCrunch Early Stage 2023! Soon enough, we’ll be coming straight atcha with a host of speakers, workshops, roundtables, and networking opportunities that are sure to accelerate your drea…",
                "url": "https://techcrunch.com/2023/04/06/level-up-with-our-partners-at-tc-early-stage/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/12/TC22_EarlyStage2023_1x-Evergreen-Wordpress-Post-Graphic_1200x628-1.jpg?w=1200",
                "publishedAt": "2023-04-06T17:21:05Z",
                "content": "Boston! Are you ready for some green on 4/20? No, not that green. Its TechCrunch Early Stage 2023! Soon enough, well be coming straight atcha with a host of speakers, workshops, roundtables, and netw… [+1966 chars]"
            }
        ]
        return articles

    if domain == 'gizmodo':
        articles = [
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Aisha Malik",
                "title": "FTC proposes new rule to make it easier to cancel free trials and subscriptions",
                "description": "The Federal Trade Commission has proposed a new rule that would make it easier for consumers to cancel free trials and subscriptions.",
                "url": "https://techcrunch.com/2023/03/24/ftc-proposes-rule-easier-cancel-free-trials-subscriptions/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/lina-khan-image.jpg?resize=1200,795",
                "publishedAt": "2023-03-24T17:01:51Z",
                "content": "The Federal Trade Commission has proposed a new “click to cancel” rule that would make it easier for consumers to cancel free trials, auto-renewals and subscriptions. The proposed rule change covers … [+2710 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Devin Coldewey",
                "title": "Blue Origin releases report on launch anomaly and plans to fly again 'soon'",
                "description": "It's been 6 months since Blue Origin's 23rd launch failed, and the company has finally released the results of its investigation.",
                "url": "https://techcrunch.com/2023/03/24/blue-origin-releases-report-on-launch-anomaly-and-plans-to-fly-again-soon/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-12-at-10.40.47-AM.jpg?resize=1200,564",
                "publishedAt": "2023-03-24T17:06:02Z",
                "content": "It’s been nearly 6 months since Blue Origin’s 23rd suborbital launch experienced an anomaly, and the company has finally released the results of its investigation. The good news is the escape functio… [+2134 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Walter Thompson",
                "title": "TechCrunch+ roundup: 20 questions VCs ask, crypto compliance tips, Indian investor survey",
                "description": "There are a ton of barriers to launching a startup, but impostor syndrome need not be one of them.",
                "url": "https://techcrunch.com/2023/03/24/techcrunch-roundup-20-questions-vcs-ask-crypto-compliance-tips-indian-investor-survey/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1471822312.jpg?resize=1200,804",
                "publishedAt": "2023-03-24T16:56:36Z",
                "content": "The quickening pace of tech layoffs is creating growing uncertainty for workers, but its giving investors access to a new wave of technical and entrepreneurial talent.\r\nTheres no simple test to deter… [+4871 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Kirsten Korosec",
                "title": "Ford to build next-gen EV truck at $5.6B factory in 2025",
                "description": "Ford said it will build its next-gen electric truck at its $5.6 billion vehicle assembly and battery cell manufacturing factory in Tennessee.",
                "url": "https://techcrunch.com/2023/03/24/ford-to-build-next-gen-ev-truck-at-5-6b-factory-in-2025/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/BlueOval-City_March-2023-construction_01.jpg?resize=1200,899",
                "publishedAt": "2023-03-24T13:43:41Z",
                "content": "Ford said Friday that its $5.6 billion BlueOval City complex outside of Memphis, Tennessee will include a truck plant capable of producing 500,000 electric vehicles a year.\r\nThe first vehicle to come… [+1720 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Jenna Routenberg",
                "title": "Investors want best-of-the-best ESG data. Here’s how to give it to them.",
                "description": "There simply aren’t enough entrepreneurs providing adequately ESG-aligned investing opportunities. Top-quality data can fix that.",
                "url": "https://techcrunch.com/2023/03/24/investors-want-best-of-the-best-esg-data-heres-how-to-give-it-to-them/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1428235915.jpg?resize=1200,800",
                "publishedAt": "2023-03-23T19:07:50Z",
                "content": "More posts by this contributor\r\nOne of the main criticisms leveled against ESG investing is that the movement is all talk, no action. The main reason for this is that there simply arent enough entrep… [+3220 chars]"
            }
        ]
        return articles

    if domain == 'engadget':
        articles = [
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "jkopeck",
                "title": "Just 7 days until the TC Early Stage early bird flies away",
                "description": "Book your TC Early Stage pass before April 1 and save up to $200 before early bird pricing closes.",
                "url": "https://techcrunch.com/2023/03/24/7-days-until-the-tc-early-stage-early-bird-flies-away/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/TC22_EarlyStage2023_Early-Bird_7-days_1200x628.png?w=1200",
                "publishedAt": "2023-03-24T17:01:58Z",
                "content": "Budget-minded entrepreneurs and early-stage startup founders take heed this is no time to procrastinate. We have only 7 days left of early-bird pricing to TechCrunch Early Stage 2023 in Boston on Apr… [+2451 chars]"
            }
        ]
        return articles


@ app.route('/fetch_articles', methods=['POST'])
def fetch_articles_route():
    domain = request.form.get('domain')
    articles = fetch_articles(domain)
    return jsonify(articles)


@ app.route("/options")
def options():
    return render_template('options.html')


@ app.route("/saved")
def saved():
    return render_template('saved.html')


if __name__ == "__main__":
    app.run(debug=True)
