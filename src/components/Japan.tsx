import { FC } from 'react';
import { HeadBlock } from './common/HeadBlock';
import { Skills } from './common/Skills';
import '../scss/reset.module.scss';
import '../scss/base.module.scss';
import classess from '../scss/jp.module.scss';

export const Japan: FC = () => {
    return (
        <>
        <HeadBlock title="私について" description="私について | 日本語" path="/jp" />
        <h1 className={classess.ch1 + ' ' + classess.jp_ch1}><span>私について</span></h1>
        <section className={classess.jp_about}>
            <div>
                <h2>Baru</h2>
                <p>中学生の頃から趣味でWeb制作を始め、大学ではネットワークやプログラミングを学び、ダブルスクールで専門学校に通い、Web制作の基礎を身につけました。<br />
                卒業後はWeb制作会社に入社し、主にECサイトのコーディングやCMS構築、PHPプログラミングなどディレクション以外の業務に携わりました。退職後はフィリピンに3ヶ月間語学留学し、その後、台湾に1か月滞在後、インターンシップでマレーシアの現地のローカル企業に就業しUI/UXデザイナー兼フロントエンドエンジニアとしてデザイン、コーディングに携わりました。</p>
                <p>このWebサイトは、元々HTML5/CSS3、jQuery、WordPressで制作していたものを独学で学習したReeact、TypeScript、SCSSで制作し直しました。他にもPythonやGoなどの言語も独学で本やオンライン教材を使って学習をしています。また、オンラインセミナーにも参加し、サイバーセキュリティについて学びました。</p>
                <Skills />
            </div>
        </section>
        <section className={classess.jp_box}>
            <div>
                <h3>新しいことを学ぶのが好きです</h3>
                <p>初めてホームページを作成したのが、中学生の頃で、ホームページビルダーでした。Photoshopで絵を描くようになったのも中学生からです。高校では秀丸エディターを使いながら当時はタグ打ちでホームページを作成していました。</p>
                <p>2020 年 4 月に再びIT留学（AIコース）をしようと計画し、学校からの課題（英語、プログラミング、数学）を勉強しながら準備をしていたのですが、新型コロナウイルスにより留学を断念しました。留学こそコロナで出来ませんでしたが、その後、Pythonを独学で勉強しました。</p>
                <p>再び腕の調子が悪くなってしまったので、どうしようか考えていましたが、2021年11月と12月、サイバーセキュリティ研修を受講し、基礎講座と応用講座を修了しました。それをきっかけに再度整形外科に通い、今度は時間が掛かったのですが、原因がわかり、それをきっかけにReeact、TypeScript、SCSS、Go、SQLの勉強を始めました。現在も英語と中国語と一緒にプログラミングは独学で学習をしています。</p>
            </div>
        </section>
        <section className={classess.jp_box}>
            <div>
                <h3>海外経験と語学</h3>
                <p>英語ゼロからフィリピンに3か月留学しました。マンツーマンでスピーキングを2か月、ビジネス英語を1か月学びました。元々英語が苦手ででしたが、幼稚園の時に英語をやっていたせいかリスニングは得意だった為、3か月である程度日常会話のスピーキングが出来るようになりました。</p>
                <p>その後、台湾で1か月滞在し、英語を使ってシェアハウスを借りて、日本人一人の状況で1か月台湾で暮らしました。英語ができるようになったおかげで台湾人をはじめほかの国の子とも友達になり、一緒に遊んだりしました。</p>
                <p>マレーシアでは日本人が私だけの現地企業でインターンシップにも参加しました。大通りで首絞め強盗被害に遭い、親切な現地警備員の方と一緒に警察や病院に行くというハプニングがありましたが、なんとか基礎英会話とジェスチャーで乗り切りました。耳で英語を覚えたのでスペルや文法などライティングの分野が苦手なので今後はそこも強化していきたいと思っています。</p>
                <p>現在も趣味でDuolingoのアプリを使って英語と中国を学習しています。2021年はDuolingoをやり込み、世界の学習者の中で上位1%の中に入るくらい夢中になっていました。</p>
            </div>
        </section>
        <section className={classess.jp_box}>
            <div>
                <h3>病気との戦い</h3>
                <p>元々、新卒で入社した会社を辞める時に手の痺れを感じていたのですが、その時は軽度であまり気にしていませんでした。海外から帰国後、就職活動をしながらプログラミングの勉強をしていたのですが、症状が悪化し、一度IT業界を諦めました。<br />
                看護学校入学後、実習の大量のレポートの手書き作業により、右手の指の感覚がなくなり、0.5mmのシャープペンシルで字が書けないレベルにまで握力も悪化しました。<br />
                退学後、まだ見た目の手の筋肉があったため、手を休ませて療養すれば治ると医師に言われ療養をしていました。1年しても回復しないため、精密検査を受け、神経に障害があることが発覚し、手術を受けました。手術後、右腕に圧迫を感じていたのですが、もう一度IT業界で働きたいと考え、海外IT留学を考えていたのですが、コロナで断念しました。<br />
                その後も手首の圧迫は無くなったものの、腕全体に圧迫が出るようになってしまい、休んでも何度も再発し、病院へ行っても原因不明のままで苦労しました。現在は、やっと原因が発覚し、リハビリを数ヶ月して長時間プログラミングが出来るようになしました。（リハビリは2022年4月で終了しました）</p>
            </div>
        </section>
        </>
    );
};