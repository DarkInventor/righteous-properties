// /api/submitLead.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const submitLead = async (req: VercelRequest, res: VercelResponse) => {
  const url = 'https://asyncapi-us11.leadsquared.com/lead/capture?accessKey=u$rae7baaeff2b1b76bfe4466f90de34a75&secretKey=e854339fea7f074a45f2196c9567f316137c5e80';

  try {
    const leadSquaredResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include other necessary headers here
      },
      body: JSON.stringify(req.body),
    });

    if (!leadSquaredResponse.ok) {
      throw new Error(`Error from LeadSquared: ${leadSquaredResponse.statusText}`);
    }

    const data = await leadSquaredResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error submitting to LeadSquared:', error);
    res.status(500).json({ error: 'Failed to submit to LeadSquared' });
  }
};

export default submitLead;