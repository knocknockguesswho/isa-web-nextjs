import { ArticleBody } from 'Components/templates/content/blog-article';
import { getStatic } from 'Helpers/page-helper';

export const servicesAccountingService: ArticleBody = {
  title: 'Accounting Service',
  timeToRead: 10000, // formated as ms
  content: [
    {
      p: [
        'We adapt our audit services to fit your unique needs, but what doesn’t change is the exceptional service quality we deliver to all our clients. Whether you’re already at the top or you’re on your way up.',
      ],
    },
    {
      p: [
        'The quality of our start with each of our professional who have the breath of experience that comes from accounting in many industries and fastest growing companies and to whom we provide the best available ongoing personal and professional development.',
      ],
    },
    {
      img: [
        {
          src: getStatic('images/desktop/services/accounting-service/accounting-service-1-1.png'),
          width: 582,
          height: 216,
        },
        {
          src: getStatic('images/desktop/services/accounting-service/accounting-service-1-2.png'),
          width: 250,
          height: 238,
        },
      ],
    },
    {
      p: [
        'We provide a consistent service by assembling the right team to address the most complex issues, using a proven global methodology and deploying the latest, high quality service and perspectives. Our professional team has been trained properly with standard of accounting and auditing.',
      ],
    },
    {
      p: [
        'And because we understand that, to achieve your potential, you need a tailored service as much as a consistent methodology, we work to give you the benefit of our deep sector knowledge, our full subject matter knowledge and the latest insights from our work worldwide.',
      ],
    },
    {
      p: [
        'We are committed to serving public companies, private companies and family business as well as companies poised for an IPO. We invite you to learn more.',
      ],
    },
  ],
};
export const servicesTaxServices: ArticleBody = {
  title: 'Tax Services',
  timeToRead: 10000, // formated as ms
  content: [
    {
      p: [
        'Corporate income taxes can significantly impact a company’s cash flow, effective tax rate and risk profile. Our network of edicated state and local tax professionals combines technical knowledge with industry understanding and access to technologically advanced tools and methodologies.',
      ],
    },
    {
      img: [
        {
          src: getStatic('images/desktop/services/tax-services/tax-services-1-1.png'),
          width: 791,
          height: 471,
        },
      ],
    },
    {
      p: [
        'We identify risk areas and sustainable planning op- portunities for taxation throughout the tax lifecycle, helping you to address your local tax responsibilities and achieve your business goals in the local and around the world.',
      ],
    },
    {
      p: [
        'Our professional is effectively integrated with Tax team to give you the perspective and support you need to manage your global tax burden effectively. Our network of practitioners has indepth knowledge of both direct and indirect state and local taxes and offers a broad array of services, including:',
      ],
    },
    {
      card: [
        {
          title: 'Employment Tax',
          content:
            'Our expert can assist with:\n\nPreparation, payment and submission of the employee’s annual income tax (form 1721) including preparation of the tax forms for each employee (1721A1)',
        },
        {
          title: 'Corporate Income Tax',
          content:
            'We will give you the advice of calculation of corporate income tax at the end of tax period. And help you on preparing from (1770)',
        },
        {
          title: 'Value Added Taxes',
          content:
            'We can fully support VAT compliance reports, identify the right partial exemption method and review accounting tax systems.  ',
        },
      ],
    },
  ],
};

export const servicesBusinessAdvisory: ArticleBody = {
  title: 'Business Advisory',
  timeToRead: 10000, // formated as ms
  content: [
    {
      p: [
        'In a world of unprecedented complexity and opportunity, organizations are looking to make new connections and find new ways of innovating. ISA Advisory is continually seeking better ways of working as we collaborate with clients to help them solve their complex industry issues and capitalize on opportunities to grow, optimize and protect their businesses. Our collaborative approach, combined with our global connectivity and  understanding  of industry issues, inspires us to ask better questions, design better answers and realize longlasting results.',
      ],
    },
    {
      p: [
        'Our range of specialized advisory services in mission critical areas of corporate and business finance, include:',
      ],
    },
    {
      card: [
        {
          title: 'Corporate Finance',
          content:
            'Our professionals provide merger and acquisition, and private equity advice from a base of deep industry knowledge. We have advised companies on the issue and listing of securities on the Indonesia equity markets. We have acted as financial advisors for companies raising funds or evaluating the complex financial implications of proposed transactions.',
        },
        {
          title: 'Project Finance & Privatisation',
          content:
            'Our resources are recognised and respected in Indonesia. At the request by conglomerate group that we have provided resources to advise on privatisation of the Company and project financing.',
        },
        {
          title: 'Corporate Value Consulting',
          content:
            "We have a team of professionals who work with our clients to maximise their corporation's value in today's rapidly changing  world. Our services include business valuations, due diligence investigations and the preparation of financial projections and budgets.",
        },
      ],
    },
  ],
};
