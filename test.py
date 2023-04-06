# test.py loads dummy data for the articles
from flask import Flask, render_template

app = Flask(__name__)
@app.route("/")
def front():
        return render_template('index.html')

@app.route("/home")
def hometest():
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
            "author": "jkopeck",
            "title": "Just 7 days until the TC Early Stage early bird flies away",
            "description": "Book your TC Early Stage pass before April 1 and save up to $200 before early bird pricing closes.",
            "url": "https://techcrunch.com/2023/03/24/7-days-until-the-tc-early-stage-early-bird-flies-away/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/TC22_EarlyStage2023_Early-Bird_7-days_1200x628.png?w=1200",
            "publishedAt": "2023-03-24T17:01:58Z",
            "content": "Budget-minded entrepreneurs and early-stage startup founders take heed this is no time to procrastinate. We have only 7 days left of early-bird pricing to TechCrunch Early Stage 2023 in Boston on Apr… [+2451 chars]"
        },
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
    return render_template('hometest.html', articles=articles)

@app.route("/options")
def options():
        return render_template('options.html')

@app.route("/saved")
def saved():
        return render_template('saved.html')

if __name__ == "__main__":
    app.run(debug=True)